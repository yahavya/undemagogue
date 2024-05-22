const cors = require('cors');
const express = require("express");
const app = express();
app.use(cors({origin: true}));

app.get("/", (request, response) => {
    response.send(JSON.stringify(
        {"demagogues": 
        [{"handle": "@bot1", "hate_score": 69, "fake_score": 100},
        {"handle": "@bot2", "hate_score": 42, "fake_score": 35}]
        }))
    });


const port = "8080"
app.listen(port, () => {
console.log(`Server listening at port: ${port}`);
});