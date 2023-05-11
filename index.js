const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
// add body parser and cors to express
const bodyParser = require('body-parser')
const cors = require('cors')

const configuration = new Configuration({
  organization: "org-Xensq0feVgx5AVs64jV0j1im",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

// create a simple express api that calls the function above
const app = express();
app.use(bodyParser.json())
app.use(cors())

const port = 3080;

app.post("/", async (req, res) => {
  const { message } = req.body;
  console.log(message);
  // const response = await openai.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: "Say this is a test",
  //   max_tokens: 7,
  //   temperature: 0,
  // });
  // console.log(response.data.choices[0].text);
  res.json({
    // data: response.data,
    data: message,
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
