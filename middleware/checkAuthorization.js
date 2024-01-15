const jwt = require("jsonwebtoken");
const db = require("../models");
const JWT_SECRET = "jwtsecret";

// to do for later - add jwt secret key to environment variable and change logic from sending nulls everywhere

const checkAuthorization = async (headers) => {
  const authorizationHeader = headers && headers.authorization;
  if (!authorizationHeader) {
    return null; // Return null for missing authorization header
  }

  try {
    const token = authorizationHeader; // Assuming format: authorization <token>
    const decoded = jwt.verify(token, JWT_SECRET);

    const userId = decoded.userId;

    // Find the user by id
    const user = await db.User.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return null; // Return null for user not found
    }
    // console.log("Found a user based on token");

    // we dont want the password field in the context for security reasons

    const userWithoutPassword = { ...user.dataValues };
    delete userWithoutPassword.password;

    return userWithoutPassword;
  } catch (error) {
    return null; // Return null for invalid token
  }
};

module.exports = checkAuthorization;
