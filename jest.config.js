const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

// console.log(compilerOptions);
// 'moduleNameMapper': pathsToModuleNameMapper(compilerOptions.paths || {}, {
//     prefix: '<rootDir>/'
// });

module.exports = {
  preset: 'jest-preset-angular',
  moduleDirectories: ['node_modules', 'src'],
  roots: ['<rootDir>/spec/tests'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage/my-app',
  testEnvironment: 'jsdom', //default

  globals: {
    'ts-jest': {
      allowSyntheticDefaultImports: true
    }
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  'moduleNameMapper': pathsToModuleNameMapper(
    {
      ...compilerOptions.paths,
      // necessary for jest to work for unit testing functions
      // https://github.com/firebase/firebase-admin-node/issues/1488#issuecomment-1008290036
      'firebase-admin/*': ['../functions/node_modules/firebase-admin/lib/*']
    },
    {
    prefix: '<rootDir>/src'
  })
};

// console.log(module.exports);


