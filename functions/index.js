/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const cors = require('cors');

// https://firebase.google.com/docs/functions/get-started

const express = require("express");
const app = express();

app.use(cors({origin: true}));

app.get("/", (request, response) => {
  logger.info("Hello logs!", {structuredData: true});
    response.send(JSON.stringify(
        {"demagogues": 
        [{"handle": "@bot1", "hate_score": 69, "fake_score": 100},
        {"handle": "@bot2", "hate_score": 42, "fake_score": 35}]
        }))
    });

 exports.getDemagogue = onRequest(app);
