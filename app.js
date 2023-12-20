const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const jwt = require("jsonwebtoken");
const schema = require("./graphql");
const checkAuthorization = require("./middleware/checkAuthorization");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

app.all(
  "/graphql",
  createHandler({
    schema: schema,
    context: async (req) => {
      // mini-middleware to run checkAuthorization to get auth header and put the current user in context of each resolver
      // the logged in user can be accessed with context.user ...
      const headers = req.headers;

      try {
        const user = await checkAuthorization(headers);
        return {
          headers,
          user,
        };
      } catch (error) {
        console.error("Authentication error:", error.message);

        return {
          headers,
          user: null,
        };
      }
    },
  })
);

async function start(port) {
  return new Promise((resolve) => app.listen({ port }, resolve));
}

module.exports = {
  start,
};
