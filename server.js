require("dotenv").config();
require("express-async-errors");

const connectionString =
  "mongodb+srv://mrklouie:Marklouie123@nodeexpressprojects.ddpamjn.mongodb.net/facebook-clone?retryWrites=true&w=majority";
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const connectDB = require("./db/connect");

//middlewares
const loginRoute = require("./routes/login");
const homeRoute = require("./routes/home");
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

app.use("/login", loginRoute);
app.use("/", homeRoute);

const start = async () => {
  try {
    await connectDB(connectionString);
    app.listen(port, console.log(`http://localhost:${port}/`));
  } catch (err) {
    console.log(err);
  }
};

app.listen(port, console.log(`http://localhost:${port}/`));

// start();

app.use(notFound);
app.use(errorHandler);
