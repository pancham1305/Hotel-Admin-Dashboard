import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBDdBjToPXL9ZdBSpc6nHI2rVBCTDBYVuY",

  authDomain: "hotel-admin-dashboard-fb9f4.firebaseapp.com",

  projectId: "hotel-admin-dashboard-fb9f4",

  storageBucket: "hotel-admin-dashboard-fb9f4.appspot.com",

  messagingSenderId: "520488403178",

  appId: "1:520488403178:web:7aa02b64e67c30354a5793",

  measurementId: "G-9D34XQKHC8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase();
export default app;
