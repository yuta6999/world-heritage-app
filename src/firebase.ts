import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBqOoT4R1Xlv8biyE7Ut2BfmjNlztgFQ-M',
  authDomain: 'world-heritage-appp.firebaseapp.com',
  projectId: 'world-heritage-appp',
  storageBucket: 'world-heritage-appp.appspot.com',
  messagingSenderId: '363825588991',
  appId: '1:363825588991:web:d1c2d19163a34417d77aca',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth };
export default db;
