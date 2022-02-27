import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyDg07gIr_K1UJbtP6cGsiemFn3-iCH7HF0",
    authDomain: "sangeetic-music-app.firebaseapp.com",
    databaseURL: "https://sangeetic-music-app-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sangeetic-music-app",
    storageBucket: "sangeetic-music-app.appspot.com",
    messagingSenderId: "329505762489",
    appId: "1:329505762489:web:17c8599e1596c3c48aff68",
    measurementId: "G-CK8RE4X80L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
