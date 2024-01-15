const db = require("../../models");

const createUserResolver = async (_, { user }, context) => {
  const { name, email, password, role } = user;
  console.log("Context user: ", context.user);

  // checking if we are logged in or the roles of the logged in user after updating user schema
  if (context.user && context.user.role === "admin") {
    const newUser = await db.User.create({
      name,
      email,
      password,
      role,
    });

    return newUser;
  } else {
    throw new Error("Unauthorized!");
  }
};

module.exports = createUserResolver;
