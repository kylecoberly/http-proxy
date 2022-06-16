const axios = require("axios");
const express = require("express");
const app = express();

app.get("/", async (request, response) => {
  const {url} = request.query;
  const proxyResponse = await axios.get(url);
  response.json(proxyResponse.data);
})

app.use((error, request, response, next) => {
  response.status(500).json({
    error: error.message
  })
})

app.listen(process.env.PORT || 4000);
