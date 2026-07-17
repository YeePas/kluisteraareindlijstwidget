import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Vul deze aan met de config uit de Firebase console:
// Project settings > Your apps > Web app > SDK setup and configuration
const firebaseConfig = {
	apiKey: 'AIzaSyC0VIA-5EUc62QPQWXB6VfazmW39eA01hE',
	authDomain: 'kluisteraareindlijst.firebaseapp.com',
	projectId: 'kluisteraareindlijst',
	storageBucket: 'kluisteraareindlijst.firebasestorage.app',
	messagingSenderId: '1043050536887',
	appId: '1:1043050536887:web:22ba7af3131c1bf0531232',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
