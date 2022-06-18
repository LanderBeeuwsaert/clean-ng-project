import firebase from 'firebase/compat/app';
import firestore = firebase.firestore;


describe('test firestore use in jest', () => {
  it(`test firestore use in jest`, () => {
    let test = firestore().doc('/test').get();
  });
});
