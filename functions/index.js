// const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
//var serviceAccount = require("./permissions.json");
const { defineSecret } = require('firebase-functions/params');

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();
const axios = require('axios');

app.use(cors({ origin: true }));
app.use(express.json());

//Routes

async function getChatGPTResponse(prompt) {
  try {
    const apiKey = defineSecret('CHATGPT_API_KEY');
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: message },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey.value().toString()}`,
        },
      }
    )

    const text = response.data.choices[0].text.trim();
    return text;
  } catch (error) {
    return error.toString();
  }
}

app.get("/api/getDemagogues", async (req, res) => {

  try {
    const twitterHandle = req.query.twitterHandle || "";
    console.log(twitterHandle);

    // Extract data from documents
    //const listings = "this is the first succesful response";
    res.json({ success: true, twitterHandle: await getChatGPTResponse("What's 5 * 9? why?") });

  } catch (error) {
    console.error('Error fetching entries from Firestore:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });

  }

});

exports.app = functions.runWith({ secrets: ["CHATGPT_API_KEY"] }).https.onRequest(app);

