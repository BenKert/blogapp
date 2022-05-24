const pool = require("../db");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { username, email, password: Npassword } = req.body;
  if (!email || !Npassword)
    return res.json({
      status: "error",
      error: "Please check if you have entered all needed information",
    });
  else {
    pool.query(
      "SELECT name,email FROM user WHERE email = ?",
      [username, email],
      async (err, result) => {
        if (err) throw err;
        if (result[0])
          return res.json({
            status: "error",
            error: "Username has been already registered",
          });
        if (result[1])
          return res.json({
            status: "error",
            error: "Email has been already registered",
          });
        else {
          const password = bcrypt.hash(Npassword, 8);
          pool.query(
            "INSERT INTO user SET ?",
            {
              name: username,
              email: email,
              password: password,
            },
            (error, results) => {
              if (error) throw error;
              return res.json({
                status: "success",
                success: "User has been registered",
              });
            }
          );
        }
      }
    );
  }
};

module.exports = register;
