import firebase from "firebase/app";
import "firebase/auth";
import { FIREBASE_CONFIG } from "./config";

const app = firebase.initializeApp({
  apiKey: FIREBASE_CONFIG.apiKey,
  authDomain: FIREBASE_CONFIG.authDomain,
  databaseURL: FIREBASE_CONFIG.databaseUrl,
  projectId: FIREBASE_CONFIG.projectId,
  storageBucket: FIREBASE_CONFIG.storageBucket,
  messagingSenderId: FIREBASE_CONFIG.messagingSenderId,
  appId: FIREBASE_CONFIG.appId,
});

export const auth = app.auth();
export default app;
