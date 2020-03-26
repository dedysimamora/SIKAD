


const admin = require('firebase-admin');
let serviceAccount = require('../Commons/adminKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();


export default db