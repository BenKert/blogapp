const express = require("express");
const req = require("express/lib/request");
require("dotenv").config();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/js", express.static(__dirname + "/public/js"));
app.use("/css", express.static(__dirname + "/public/css"));
app.set("view engine", "ejs");
app.set("views", "./views");

//app.use("/api/users", require("./routes/usersRoutes"));
//app.use("/api/blog", require("./routes/blogRoutes"));
app.use("/", require("./routes/pages"));
app.use("/api", require("./controllers/auth"));

app.listen(process.env.DB_PORT, () => {
  console.log(`App listening on port ${process.env.DB_PORT}`);
});
