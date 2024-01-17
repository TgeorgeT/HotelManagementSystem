const db = require("../../../models");
const bcrypt = require("bcrypt");

const userQueryResolver = async (_, { id }, context) => {
  if (!context.user || (context.user.id != id && context.user.role != "admin"))
    throw new Error("Unauthorized");
  // To check if we are logged in we check if there is a context.user / for role - context.user.role === "admin"
  return await db.User.findByPk(id);
};

module.exports = userQueryResolver;
