const bcrypt = require('bcrypt')
const userRoutes = require("express").Router();
const User = require("../model/user");

userRoutes.get("/", async (req, res, next) => {
  try {
    const users = await User.find({});
    if (users) {
      res.json(users);
    }
  } catch (error) {
    next(error);
  }
});

userRoutes.post("/", async (req, res, next) => {
  try {
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)
    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash 
    });
    const savedUser = await user.save()
    res.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
});


module.exports = userRoutes;
