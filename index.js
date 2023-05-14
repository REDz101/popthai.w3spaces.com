const { initializeApp } = require('firebase/app');
const { getDatabase, increment, ref, update } = require('firebase/database');
var firebaseConfig = {}
firebaseConfig.apiKey = 'AIzaSyC3KO2o1wVKQR-m638J4Rn5AztxPenRG7M'
firebaseConfig.authDomain = 'popthaidatanew.firebaseapp.com'
firebaseConfig.databaseURL = 'https://popthaidatanew.firebaseio.com/'
firebaseConfig.projectId = 'popthaidatanew'
firebaseConfig.storageBucket = 'popthaidatanew.appspot.com'
firebaseConfig.messagingSenderId = '1041754595727'
firebaseConfig.appId = '1:1041754595727:web:dee06bd4bf82ac118fabfa'
firebaseConfig.measurementId = 'G-6HPZ6F50L4'
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(database);
const update_ss = {};
update_ss['scoress/พรรคก้าวไกล'] = increment(1);
update_ss['scoressB/พรรคก้าวไกล'] = increment(1);
setInterval(() => {
    update(dbRef, update_ss)
}, 10);
