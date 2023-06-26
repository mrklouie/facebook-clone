require("express-async-errors");

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

//middlewares
const loginRoute = require("./routes/login");
const notFound = require("./errors/notFound");
const errorHandler = require("./middleware/errorHandler");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//extra middlewares
const cors = require("cors");

app.use(express.static(__dirname));
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, OPTIONS");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/login", loginRoute);

app.listen(port, console.log(`http://localhost:${port}/`));

app.use(notFound);
app.use(errorHandler);
