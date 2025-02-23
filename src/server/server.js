const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("dist"));

const port = 8081;
app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});

app.post("/trip", async (req, res) => {
    const { location } = req.body;
    res.send({ message: `Received trip request for ${location}` });
});

