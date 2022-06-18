import * as firebase from '@firebase/testing';
import { firestore } from 'firebase/app';
import Firestore = firestore.Firestore;
import { DocumentReference } from '@angular/fire/compat/firestore';
import { UserModel } from '../../shared/models/user.model';
import { Manager } from '../../shared/models/manager.model';
import { Coach } from '../../src/app/core/models/coach.model';
import FirestoreError = firestore.FirestoreError;
import CollectionReference = firestore.CollectionReference;
import Timestamp = firebase.firestore.Timestamp;

export let mockData: any = {};
export let managersCollRef: CollectionReference;

export let newUserDocRef: DocumentReference;
export let newUserDoc: UserModel;

export let nonExistantUserDocRef: DocumentReference;
export let nonExistantUserDoc: UserModel;

export let normalUserDocRef: DocumentReference;
export let normalUserDoc: UserModel;

export let subAdminUserDocRef: DocumentReference;
export let subAdminUserDoc: UserModel;

export let existingManagerUserDocRef: DocumentReference;
export let existingManagerUserDoc: UserModel;
export let existingManagerManagerDocRef: DocumentReference;
export let existingManagerManagerDoc: Manager;

export let newManagerUserDocRef: DocumentReference;
export let newManagerUserDoc: UserModel;
export let newManagerManagerDocRef: DocumentReference;
export let newManagerManagerDoc: Manager;

export let existingCoachUserDocRef: DocumentReference;
export let existingCoachUserDoc: UserModel;
export let existingCoachCoachDocRef: DocumentReference;
export let existingCoachCoachDoc: Partial<Coach>;

export let newCoachUserDocRef: DocumentReference;
export let newCoachUserDoc: UserModel;
export let newCoachCoachDocRef: DocumentReference;
export let newCoachCoachDoc: Partial<Coach>;

export const prepareData = function (db) {
  managersCollRef = db.collection('managers');

  newUserDocRef = db.doc('users/new.user@gmail.com');
  newUserDoc = {
    firebase_id: '',
    provider_string: 'google.com',
    email: 'new.user@gmail.com',
    email_verified: true,
    is_manager_coach_user_existence_checked: false,
    app_version: null,
    name: '',
    surname: '',
    club: '',
    telnr: '',
    user_level: 20,
    created_by: '',
    created_on: Timestamp.now(),
    updated_by: '',
    updated_on: Timestamp.now(),
    privacy_policy_approval_date: Timestamp.now(),
    authentication_counter: 2000,
    is_tumbling_user: false,
    last_used_app_version: 20,
    fcm_tokens: [],
    is_sending_app_notifications_allowed: false,
    is_sending_mails_allowed: false,
  };
  // mockData['users/new.user@gmail.com'] = newUserDoc;

  nonExistantUserDocRef = db.doc('users/non.existant.user@gmail.com');
  nonExistantUserDoc = {
    firebase_id: '',
    provider_string: 'google.com',
    email: 'non.existant.user@gmail.com',
    email_verified: true,
    is_manager_coach_user_existence_checked: false,
    app_version: null,
    name: '',
    surname: '',
    club: '',
    telnr: '',
    user_level: 20,
    created_by: '',
    created_on: Timestamp.now(),
    updated_by: '',
    updated_on: Timestamp.now(),
    privacy_policy_approval_date: Timestamp.now(),
    authentication_counter: 2000,
    is_tumbling_user: false,
    last_used_app_version: 20,
    fcm_tokens: [],
    is_sending_app_notifications_allowed: false,
    is_sending_mails_allowed: false,
  };
  // mockData['users/non.existant.user@gmail.com'] = nonExistantUserDoc;

  normalUserDocRef = db.doc('users/normal.user@gmail.com');
  normalUserDoc = {
    firebase_id: '',
    provider_string: 'google.com',
    email: 'normal.user@gmail.com',
    email_verified: true,
    is_manager_coach_user_existence_checked: false,
    app_version: null,
    name: '',
    surname: '',
    club: '',
    telnr: '',
    user_level: 20,
    created_by: '',
    created_on: Timestamp.now(),
    updated_by: '',
    updated_on: Timestamp.now(),
    privacy_policy_approval_date: Timestamp.now(),
    authentication_counter: 2000,
    is_tumbling_user: false,
    last_used_app_version: 20,
    fcm_tokens: [],
    is_sending_app_notifications_allowed: false,
    is_sending_mails_allowed: false,
  };
  mockData['users/normal.user@gmail.com'] = normalUserDoc;

  subAdminUserDocRef = db.doc('users/subadmin@gmail.com');
  subAdminUserDoc = {
    firebase_id: '',
    provider_string: 'google.com',
    email: 'subadmin@gmail.com',
    email_verified: true,
    is_manager_coach_user_existence_checked: false,
    app_version: null,
    name: '',
    surname: '',
    club: '',
    telnr: '',
    user_level: 50,
    created_by: '',
    created_on: Timestamp.now(),
    updated_by: '',
    updated_on: Timestamp.now(),
    privacy_policy_approval_date: Timestamp.now(),
    authentication_counter: 2000,
    is_tumbling_user: false,
    last_used_app_version: 20,
    fcm_tokens: [],
    is_sending_app_notifications_allowed: false,
    is_sending_mails_allowed: false,
  };
  mockData['users/subadmin@gmail.com'] = subAdminUserDoc;

  existingManagerUserDocRef = db.doc('users/existing.manager@gmail.com');
  existingManagerUserDoc = {
    firebase_id: '',
    provider_string: 'google.com',
    email: 'existing.manager@gmail.com',
    email_verified: true,
    is_manager_coach_user_existence_checked: false,
    app_version: null,
    name: '',
    surname: '',
    club: '',
    telnr: '',
    user_level: 20,
    created_by: '',
    created_on: Timestamp.now(),
    updated_by: '',
    updated_on: Timestamp.now(),
    privacy_policy_approval_date: Timestamp.now(),
    authentication_counter: 2000,
    is_tumbling_user: false,
    last_used_app_version: 20,
    fcm_tokens: [],
    is_sending_app_notifications_allowed: false,
    is_sending_mails_allowed: false,
  };
  mockData['users/existing.manager@gmail.com'] = existingManagerUserDoc;

  existingManagerManagerDocRef = db.doc('managers/test organisation -- existing.manager@gmail.com');
  existingManagerManagerDoc = {
    name: 'manager dude',
    owner_ref: db.doc('organisations/test organisation'),
    email: 'existing.manager@gmail.com',
    function: 'Manager',
    is_linked_user_exists: false,
    options: {},
  };
  mockData['managers/test organisation -- existing.manager@gmail.com'] = existingManagerManagerDoc;

  newManagerUserDocRef = db.doc('users/new.manager@gmail.com');
  newManagerUserDoc = {
    firebase_id: '',
    provider_string: 'google.com',
    email: 'new.manager@gmail.com',
    email_verified: true,
    is_manager_coach_user_existence_checked: false,
    app_version: null,
    name: '',
    surname: '',
    club: '',
    telnr: '',
    user_level: 20,
    created_by: '',
    created_on: Timestamp.now(),
    updated_by: '',
    updated_on: Timestamp.now(),
    privacy_policy_approval_date: Timestamp.now(),
    has_user_logged_in_before: false,
    authentication_counter: 2000,
    is_tumbling_user: false,
    last_used_app_version: 20,
    fcm_tokens: [],
    is_sending_app_notifications_allowed: false,
    is_sending_mails_allowed: false,
  };
  mockData['users/new.manager@gmail.com'] = newManagerUserDoc;

  newManagerManagerDocRef = db.doc('managers/test organisation -- new.manager@gmail.com');
  newManagerManagerDoc = {
    name: 'manager dude',
    owner_ref: db.doc('organisations/test organisation'),
    // owner_ref: null,
    email: 'new.manager@gmail.com',
    function: 'Manager',
    is_linked_user_exists: false,
    options: {},
  };
  // mockData['managers/test organisation -- new.manager@gmail.com'] = newManagerManagerDoc;

  existingCoachUserDocRef = db.doc('users/existing.coach@gmail.com');
  existingCoachUserDoc = {
    firebase_id: '',
    provider_string: 'google.com',
    email: 'existing.coach@gmail.com',
    email_verified: true,
    is_manager_coach_user_existence_checked: false,
    app_version: null,
    name: '',
    surname: '',
    club: '',
    telnr: '',
    user_level: 20,
    created_by: '',
    created_on: Timestamp.now(),
    updated_by: '',
    updated_on: Timestamp.now(),
    privacy_policy_approval_date: Timestamp.now(),
    authentication_counter: 2000,
    is_tumbling_user: false,
    last_used_app_version: 20,
    fcm_tokens: [],
    is_sending_app_notifications_allowed: false,
    is_sending_mails_allowed: false,
  };
  mockData['users/existing.coach@gmail.com'] = existingCoachUserDoc;

  existingCoachCoachDocRef = db.doc('coaches/test organisation -- existing.coach@gmail.com');
  existingCoachCoachDoc = {
    email: 'existing.coach@gmail.com',
    is_linked_user_exists: false,
    owner_ref: db.doc('organisations/test organisation'),
    name: 'coach dude',
    linked_sheets: [],
  };
  mockData['coaches/test organisation -- existing.coach@gmail.com'] = existingCoachCoachDoc;

  newCoachUserDocRef = db.doc('users/new.coach@gmail.com');
  newCoachUserDoc = {
    firebase_id: '',
    provider_string: 'google.com',
    email: 'new.coach@gmail.com',
    email_verified: true,
    is_manager_coach_user_existence_checked: false,
    app_version: null,
    name: '',
    surname: '',
    club: '',
    telnr: '',
    user_level: 20,
    created_by: '',
    created_on: Timestamp.now(),
    updated_by: '',
    updated_on: Timestamp.now(),
    privacy_policy_approval_date: Timestamp.now(),
    authentication_counter: 2000,
    is_tumbling_user: false,
    last_used_app_version: 20,
    fcm_tokens: [],
    is_sending_app_notifications_allowed: false,
    is_sending_mails_allowed: false,
  };
  mockData['users/new.coach@gmail.com'] = newCoachUserDoc;

  newCoachCoachDocRef = db.doc('coaches/test organisation -- new.coach@gmail.com');
  newCoachCoachDoc = {
    email: 'new.coach@gmail.com',
    is_linked_user_exists: false,
    owner_ref: db.doc('organisations/test organisation'),
    name: 'coach dude',
    linked_sheets: [],
  };
  // mockData['coaches/test organisation -- new.coach@gmail.com'] = newCoachManagerDoc;
};
