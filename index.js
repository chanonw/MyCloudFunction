const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const defaultRouter = require('./routes/defaultRouter')

const app = express();

app.use(
  cors({
    origin: true,
  }),
);

app.use('/', defaultRouter)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// app.get('/', (req, res) => {
//   res.send('Hellow Get By Pun');
// });

exports.hello = functions.region('asia-east2').https.onRequest(app);
