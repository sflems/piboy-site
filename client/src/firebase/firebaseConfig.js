// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
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
const db = getFirestore(app);

const getEmails = async () => {
  const emailsCol = collection(db, "emails");
  const emailsSnapshot = await getDocs(emailsCol);
  const emailsList = []
  emailsSnapshot.docs.map((doc) => console.log(doc.data()) && emailsList.push(doc.data()));
  return emailsList;
};

export { db, getEmails };
