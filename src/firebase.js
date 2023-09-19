import {initializeApp} from'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "educase-assignment",
    storageBucket: "educase-assignment.appspot.com",
    messagingSenderId: "841816262391",
    appId: "1:841816262391:web:a1b068f7427e77cb7f75f2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
  