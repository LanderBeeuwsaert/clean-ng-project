import { Browser, BrowserContextOptions, chromium, Page } from 'playwright';

async function run(): Promise<number> {
  let browser: Browser = await chromium.launch({
    args: ['--remote-debugging-port=9999'], // To use this in webstorm, add a node/chrome debugger for this port & launch when chrome instance starts
    headless: false,
    slowMo: 100,
    // logger: {
    //   isEnabled: (name, severity) => true,
    //   log: (name, severity, message, args) => console.log(`playwright logging: ${name} ${message}`)
    // }
    // args: ['--window-position=100,200'],
  });

  // let contextOptions: BrowserContextOptions = { viewport: { width, height }, locale };
  let context = await browser.newContext();
  // this.context = await this.browser.newContext(contextOptions);
  // if (this.createTrace) {
    // contextOptions.recordVideo = { dir: this.storageUploadPath };
    // await this.context.tracing.start({ screenshots: true, snapshots: true });
  // }
  // await this.context.exposeBinding('isPlaywright', () => true);
  // await this.context.exposeBinding('playwrightDebugLevel', () => this.debugLevel);
  // if (this.isE2eSpeedUp) await this.context.exposeBinding('isE2eSpeedUp', () => true);

  let page: Page = await context.newPage();
  // this.page.setDefaultTimeout(this.isInCi ? 40000 : 20000);
  // ConsoleMessageLogger.logConsoleMessages(this.page, this.testName, this, this.signInHelper, this.email, this.password, this.logger, this.navigation);

  // await this.page.waitForTimeout(this.delay);

  page.on('console', async msg => {
    for (let i = 0; i < msg.args().length; ++i) {
      let messageLineHandle = msg.args()[i];
      if (messageLineHandle) {
        let jsonValue = null;
        try {
          jsonValue = await messageLineHandle.jsonValue();
          console.log(jsonValue);
        } catch (error) {
        }
        // jsonValue.includes does not exist if the logged item is not a string
      }
    }
  });


  await page.goto(
    'http://localhost:4200'
  );

  await page.type('.ag-cell', 'qsdf');
  await page.click('.ag-cell');
  await page.press('body', 'Enter');
  await page.waitForTimeout(100000);

  return 0;
}


run().then(code => {
  process.exit(code);
});
