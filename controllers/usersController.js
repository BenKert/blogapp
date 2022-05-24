const pool = require("../db");

exports.getAllUsers = async (req, res, next) => {
  let sql = `SELECT * FROM user FOR JSON AUTO`;
  try {
    const [rows] = await pool.query(sql);
  } catch (err) {}
};
