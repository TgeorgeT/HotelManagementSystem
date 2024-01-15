const db = require("../../../models");

const createUserResolver = async (_, { user }, context) => {
  const { name, email, password } = user;

  // checking if we are logged in or the roles of the logged in user after updating user schema
  if (context.user) {
    const newUser = await db.User.create({
      name,
      email,
      password,
    });

    return newUser;
  } else {
    throw new Error("Unauthorized!");
  }
};

module.exports = createUserResolver;
