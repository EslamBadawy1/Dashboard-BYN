//Dotenv
require("dotenv").config();
//express
const express = require("express");
const app = express();

//middleware json
app.use(express.json());

//connect to database

//simole logger
if (process.env.NODE_ENV === "dev") {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
  });
}
// test route
app.get("/test", (req, res) => {
  res.json({ message: "test route " });
});

const connectDB = require("./config/db");
connectDB();

//port
const PORT = process.env.PORT || 3000;
//run server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
