const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const User = require("./models/User");

app.use(cors());
app.use(express.json());

//connect our mongoose database to register users
mongoose.connect(
  "mongodb+srv://blog:PtMUvnk2souuYOAp@cluster0.buxpsz9.mongodb.net/test"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  //handle error of not having unique username
  try {
    //create our user & return user document
    const userDoc = await User.create({
      username,
      password,
    });
    res.json(userDoc);
  } catch {
    //response to error
    res.status(400).json(e.message);
  }
});

app.listen(4000);
