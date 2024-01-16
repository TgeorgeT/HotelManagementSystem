const db = require("../../../models");
const bcrypt = require("bcrypt");

const createUserResolver = async (_, { user }, context) => {
  const { name, email, password } = user;
  console.log("Context user: ", context.user);

  // To check if we are logged in we check if there is a context.user / for role - context.user.role === "admin"
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const newUser = await db.User.create({
      name,
      email,
      password: hashedPassword,
      role: "user",
    });

    return newUser;
  } catch (error) {
    throw new Error("Error hashing or creating user!");
  }
};

module.exports = createUserResolver;
