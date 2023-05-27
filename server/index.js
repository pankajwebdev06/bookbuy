const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoute = require("./routes/authRoute");
const profileRoute = require("./routes/profileRoute");
const bodyParser = require("body-parser");
require("dotenv").config();
const products = require("./product/product");

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    credentials: true,
  })
);

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DataBase");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
  });

app.use("/", authRoute);
app.use("/", profileRoute);
app.get("/api/products", (req, res) => {
  res.json(products);
});
