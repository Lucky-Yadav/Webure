const express = require("express");
const app = express();
const http = require("http");
const PORT = 3070;
// console.log(process);
var jwt = require("jsonwebtoken");

app.use(express.json());

const todos = [];
app.get("/", (req, res) => {
  try {
    return res.send({
      todos,
    });
  } catch (error) {
    console.error(error.message);
    res.send("internal error ");
  }
});

app.post("/", (req, res) => {
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
app.delete("/:id", (req, res) => {
  const { id } = req.params;

  let index = null;
  todos.forEach((todo, i) => {
    if (todo.id == id) {
      index = i;
    } else {
      todos.splice(index, 1);
      return res.send("deleted");
    }
  });
  if (index == null) {
    return res.status(404).send("data doesn't exist");
  }
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
