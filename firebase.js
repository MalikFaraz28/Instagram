import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBvuk46QKAiSJSCdE1unrx8IFqSrNfBuUk",
  authDomain: "replica-a3804.firebaseapp.com",
  projectId: "replica-a3804",
  storageBucket: "replica-a3804.firebasestorage.app",
  messagingSenderId: "303107625846",
  appId: "1:303107625846:web:bd63dd8e1dbf7b14cb2057"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);