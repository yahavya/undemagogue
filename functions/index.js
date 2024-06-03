// const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
//var serviceAccount = require("./permissions.json");

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors( {origin: true}));
app.use(express.json());

//Routes
//Get

app.get("/api/getDemagogues", async (req, res) => {

    try {
    const twitterHandle = req.query.twitterHandle || "";
    console.log(twitterHandle);

    // Extract data from documents
    //const listings = "this is the first succesful response";

    res.json({ success: true, twitterHandle: twitterHandle });

  } catch (error) {
    console.error('Error fetching entries from Firestore:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });

  }

});

exports.app = functions.https.onRequest(app);

