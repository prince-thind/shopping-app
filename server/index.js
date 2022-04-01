const express = require("express");
require('dotenv').config();
const axios = require("axios");
const helmet = require("helmet");

const PORT = process.env.PORT || 3001; //development
const app = express();
const cors = require("cors"); //development

app.use(cors({origin:process.env.ORIGIN}));
app.use(helmet());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/", (req, res) => {
  const name = req.query.q;
  const URL = "https://pixabay.com/api/";
  axios
    .get(URL, {
      params: {
        key: process.env.REACT_APP_API_KEY, //development
        q: name.replaceAll(" ", "+"),
        per_page: 10,
        safesearch: true,
        image_type: "photo",
      },
    })
    .then((response) => {
      const images = response.data.hits.map((i) => i.webformatURL);
      res.json(images[Math.trunc(Math.random() * images.length)]);
    });
});
