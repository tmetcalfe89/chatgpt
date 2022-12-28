# ChatGPT Example with React

## Brief

This project is an example of how to use the OpenAI API. The user types a query into the upper box, submits the form, and ChatGPT responds in the lower box.

## Setup

1. Register an account with OpenAI. As of this writing, [this link](https://beta.openai.com/signup) leads to their registration page.
2. Create an OpenAI secret key. As of this writing [this link](https://beta.openai.com/account/api-keys) leads to the page for doing so if you are logged in.
3. Clone this project to your local machine or download the ZIP folder and extract its contents somewhere.
4. Run `npm i` in the root directory of your local version of the project.
5. Rename the `.env.example` file in the `/server` directory to `.env` and add your secret key after `CHATGPT_KEY=`.
6. Open a command line terminal and run `npm run dev:server` from the root directory of the project.
7. Open another command line terminal and run `npm run dev:client` from the root directory of the project.

A browser window should pop open with the client running in it. From here, you can enter your query into the upper box, submit the form, and ChatGPT should respond in the lower box.
