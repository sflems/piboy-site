// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, getDocs, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:975926014828:web:2ec85eea0a91717e073949",
  measurementId: "G-1LE7H7TQ2X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
// eslint-disable-next-line no-unused-vars
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LcSpE4dAAAAABm4c31qfHodx8c3PGKNTr6Z3Ekw"),
  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});

// Init DB
const db = getFirestore(app);

const getEmails = async () => {
  const emailsCol = collection(db, "emails");
  const emailsSnapshot = await getDocs(emailsCol);
  const emailsList = [];
  emailsSnapshot.docs.map(
    (doc) => console.log(doc.data()) && emailsList.push(doc.data())
  );
  return emailsList;
};

export { db, getEmails };
