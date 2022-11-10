const express = require("express");
const app = express();
const http = require("http");
const PORT = 3070;
const cors = require("cors");
var jwt = require("jsonwebtoken");
const { MongoClient } = require("mongodb");
const userRouter = require("./routes/userRoutes");
const mongoose = require('mongoose');

app.use(express.json());
app.use(
  cors()
);
app.use("/users", userRouter)
const todos = [];
app.get("/", (req, res, next) => {
  try {
    return res.send({
      todos,
    });
  } catch (error) {
    console.error(error.message);
    res.send("internal error ");
  }
});

app.post("/", (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    const token = jwt.sign({ email: email, password:password }, 'SECRET_KEY');

    
    return res.send(token);
  } catch (err) {
    console.error(err);
    return res.status(500).send("internal server errr");
  }
});
mongoose
  .connect(
    "mongodb+srv://user:wGPrQ0iGQM3rO4nZ@cluster0.zkwpvpy.mongodb.net/?retryWrites=true&w=majority"
  )
    .then(() => {
        console.log("handshake successful")
      app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
  })
  .catch((err) => {
    console.log(err);
  });


