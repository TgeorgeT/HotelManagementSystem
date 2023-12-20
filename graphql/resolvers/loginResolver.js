const db = require("../../models");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "jwtsecret";

const loginResolver = async (_, args, context) => {
  console.log(_);
  console.log(args);
  console.log(JWT_SECRET);

  const { email, password } = args;

  // Find the user by email
  const user = await db.User.findOne({
    where: {
      email: email,
      password: password,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  // to do - check for matching password hashes instead of directly finding correspondent

  // Compare the provided password with the hashed password in the database
  //   const passwordMatch = await bcrypt.compare(password, user.password);

  //   if (!passwordMatch) {
  //     throw new Error("Invalid password");
  //   }

  // Generate a JWT token
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });

  return {
    token,
    user,
  };
};

module.exports = loginResolver;
