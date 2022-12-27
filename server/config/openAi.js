const { Configuration, OpenAIApi } = require("openai");

const models = {
  davinci: "text-davinci-003",
  curie: "text-curie-001",
  babbage: "text-babbage-001",
  ada: "text-ada-001",
};

function initializeConfiguration(key, model = models.ada) {
  const configuration = new Configuration({
    apiKey: key,
  });
  const openai = new OpenAIApi(configuration);

  return {
    getResponse: (query) =>
      openai.createCompletion({
        model,
        prompt: query,
      }),
  };
}

module.exports = {
  init: initializeConfiguration,
  models,
};
