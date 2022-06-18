import * as firebase from '@firebase/testing';
import * as fs from 'fs';
import { firestore } from 'firebase/app';
import Firestore = firestore.Firestore;

let projectId: string = null;
let db: Firestore = null;

export const setupDB = async function (auth?: object, data?: object): Promise<Firestore> {
  await initiateDB(auth);
  if (data) await injectDBData(data);
  await enforceRules();

  return db;
};

export const initiateDB = async function (auth?: object): Promise<Firestore> {
  projectId = `rules-spec-${Date.now()}`;
  const app = await firebase.initializeTestApp({
    projectId,
    auth,
  });

  db = app.firestore();

  return db;
};

export const injectDBData = async function (data: object) {
  for (const key in data) {
    const ref = db.doc(key);
    await ref.set(data[key]);
  }
};

export const enforceRules = async function () {
  // Apply rules
  await firebase.loadFirestoreRules({
    projectId,
    rules: fs.readFileSync('firestore.rules', 'utf8'),
  });
};

export const teardown = async function () {
  Promise.all(firebase.apps().map((app) => app.delete()));
};

expect.extend({
  async toAllow(x) {
    let pass: boolean = false;
    try {
      await firebase.assertSucceeds(x);
      pass = true;
    } catch (err) {}

    return {
      pass,
      message: () => 'Expected Firebase operation to be allowed, but it failed',
    };
  },
});

expect.extend({
  async toDeny(x) {
    let pass: boolean = false;
    try {
      await firebase.assertFails(x);
      pass = true;
    } catch (err) {}
    return {
      pass,
      message: () => 'Expected Firebase operation to be denied, but it was allowed',
    };
  },
});
