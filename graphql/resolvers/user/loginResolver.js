const db = require("../../../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const JWT_SECRET = process.env.JWT_SECRET;

const loginResolver = async (_, args, context) => {
  console.log(_);
  console.log(args);

  const { email, password } = args;

  // Find the user by email
  const user = await db.User.findOne({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new Error("User not found!");
  } else {
    const hashedPassword = user.password;
    const passwordMatch = await bcrypt.compare(password, hashedPassword);
    if (passwordMatch) {
      // for the seeders to work, on deployment this should be deleted
      // Passwords match
      // Generate a JWT token
      const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: "1h",
      });

      return {
        token,
        user,
      };
    } else {
      // Passwords do not match
      console.log("Passwords do not match");
      throw new Error("Incorrect username or password!");
    }
  }
};

module.exports = loginResolver;
