import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
        apiKey: process.env['REACT_APP_FIREBASE_API_KEY'],
        authDomain: process.env['REACT_APP_FIREBASE_AUTH_DOMAIN'],
        databaseURL: process.env['REACT_APP_FIREBASE_DATABASE_URL'],
        projectId: process.env['REACT_APP_FIREBASE_PROJECT_ID'],
        storageBucket: process.env['REACT_APP_FIREBASE_STORAGE_BUCKET'],
        messagingSenderId: process.env['REACT_APP_FIREBASE_MESSAGE_SENDER_ID'],
        appId: process.env['REACT_APP_FIREBASE_APP_ID'],
        measurementId: process.env['REACT_APP_FIREBASE_MEASUREMENT_ID']
  };

 const app = initializeApp(firebaseConfig);

 const db = getDatabase(app)

 const googleAuthProvider = new GoogleAuthProvider();
 export { db as default , app, googleAuthProvider }
//  expenses.map((expense)=>{
//     push(ref(db, 'expenses'),expense)
//  })

// onValue(ref(db, 'expenses'),(snapshot)=>{
//     const expenses = []
//     snapshot.forEach((childsnapshot)=>{
//         expenses.push({
//             ...childsnapshot.val(),
//             id: childsnapshot.key
//         })
//     })
//     console.log(expenses)
// })

// onChildRemoved(ref(db, 'expenses'),(snapshot)=>{
//     console.log(snapshot.val())
    
// })
