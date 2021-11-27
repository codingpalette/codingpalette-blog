const functions = require('firebase-functions')
const admin = require('firebase-admin')

const serviceAccount = require('./key.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: functions.config().admin.db_url, //'https://svelte-firebase-boiler-plate.firebaseio.com',
})

// admin.initializeApp();
const db = admin.firestore()

// console.log(functions.config().admin.email);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!')
})

exports.createUser = functions.auth.user().onCreate(async user => {
  const { uid, email, displayName, emailVerified, photoURL, disabled } = user
  const claims = { level: 5 }
  // if (functions.config().admin.email === user.email && user.emailVerified) claims.level = 0;
  if (functions.config().admin.email === user.email) claims.level = 0
  await admin.auth().setCustomUserClaims(uid, claims)
  let today = new Date()
  const d = {
    uid,
    email,
    nickName: email.split('@')[0],
    displayName,
    emailVerified,
    photoURL,
    disabled,
    createdAt: today,
    level: claims.level,
    // address: {
    //   road: '',
    //   road_detail: '',
    //   postcode: '',
    // },
  }

  const r = await db.collection('users').doc(uid).set(d)
  // realdb.ref('users').child(uid).set(d);
  return r
})

exports.deleteUser = functions.auth.user().onDelete(user => {
  db.collection('users').doc(user.uid).delete()
  // realdb.ref('users').child(user.uid).remove();
})

function dateFormat(date) {
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()

  month = month >= 10 ? month : '0' + month
  day = day >= 10 ? day : '0' + day
  hour = hour >= 10 ? hour : '0' + hour
  minute = minute >= 10 ? minute : '0' + minute
  second = second >= 10 ? second : '0' + second

  return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
}
