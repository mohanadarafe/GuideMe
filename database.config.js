import * as Firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDqq-F-dasimBJjESyT4_zxJmTzhrNC5Ck",
  authDomain: "tempguideme.firebaseapp.com",
  databaseURL: "https://tempguideme.firebaseio.com",
  storageBucket: "tempguideme.appspot.com",
  projectId: "tempguideme"
};

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();

