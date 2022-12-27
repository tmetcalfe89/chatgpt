require("dotenv").config();
const express = require("express");
const openAi = require("./config/openAi");

const { PORT = 3001, CHATGPT_KEY } = process.env;

const app = express();
const openAiClient = openAi.init(CHATGPT_KEY, openAi.models.curie);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/query", async (req, res) => {
  try {
    const { query } = req.body;

    if (query === undefined) {
      res.status(400).json({
        error:
          "Please provide a query property on the JSON body of your request to receive a response.",
      });
    }

    const queryResponse = await openAiClient.getResponse(query);
    console.log(queryResponse.data);

    res
      .status(200)
      .json({ response: queryResponse.data.choices[0].text.trim() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

app.listen(PORT, () => {
  console.info(`API server alive and listening on port ${PORT}`);
});
