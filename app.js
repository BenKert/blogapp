const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/users", require("./routes/usersRoutes"));
app.use("/api/blog", require("./routes/blogRoutes"));

app.listen(process.env.DB_PORT, () => {
  console.log(`App listening on port ${process.env.DB_PORT}`);
});
