// const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
//var serviceAccount = require("./permissions.json");
const { defineSecret } = require('firebase-functions/params');

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();
const request = require('request');


app.use(cors({ origin: true }));
app.use(express.json());

//Routes
function requestAsync(options) {
  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (error) {
        return reject(error);
      }
      resolve({ response, body });
    });
  });
}

async function getChatGPTResponse(prompt) {
  try {
    let apiKey = defineSecret('CHATGPT_API_KEY');
    apiKey = apiKey.value().toString();
    var options = {
      'method': 'POST',
      'url': 'https://api.openai.com/v1/chat/completions',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [
          {
            "role": "user",
            "content": "Who won the world series in 2020?"
          },
          {
            "role": "assistant",
            "content": "The Los Angeles Dodgers won the World Series in 2020."
          },
          {
            "role": "user",
            "content": "Where was it played?"
          }
        ],
        "temperature": 1,
        "top_p": 1,
        "n": 1,
        "stream": false,
        "max_tokens": 250,
        "presence_penalty": 0,
        "frequency_penalty": 0
      })

    };

    const { response, body } = await requestAsync(options);
    return body

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
    const data = await getChatGPTResponse("What's 5 * 9? why?");
    res.json({ success: true, data: data });
  } catch (error) {
    console.error('Error fetching entries from Firestore:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }

});

exports.app = functions.runWith({ secrets: ["CHATGPT_API_KEY"] }).https.onRequest(app);

