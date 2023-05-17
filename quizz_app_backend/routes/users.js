import express from "express";
import Users from "../models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import checkAuth from "../middlewear/check-auth.js";
import { loginValidator, registerValidator } from "../validators/validators.js";
const router = express.Router();

//**********user login*************/
router.post("/login", (req, res) => {
  const { errors, isValid } = loginValidator(req.body);
  if (!isValid) {
    res.json({ success: false, errors });
  } else {
    Users.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        res.json({ message: "Email does not exist", success: false });
      } else {
        bcrypt.compare(req.body.password, user.password).then((success) => {
          if (!success) {
            res.json({ message: "Invalid password", success: false });
          } else {
            const payload = {
              id: user._id,
              name: user.firstName,
            };
            jwt.sign(
              payload,
              process.env.APP_SECRET,
              { expiresIn: 2155926 },
              (err, token) => {
                res.json({
                  user,
                  token: "Bearer token: " + token,
                  success: true,
                });
              }
            );
          }
        });
      }
    });
  }
});

//************User registration */
router.post("/register", (req, res) => {
  const { errors, isValid } = registerValidator(req.body);
  console.log(errors, isValid);
  if (!isValid) {
    res.json({ success: false, errors: errors });
  } else {
    const { firstName, lastName, email, password } = req.body;
    const registerUser = new Users({
      firstName,
      lastName,
      email,
      password,
      createdAt: new Date(),
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(registerUser.password, salt, (hashErr, hash) => {
        if (err || hashErr) {
          res.json({ message: "Error occured in hashing", success: false });
          return;
        }
        registerUser.password = hash;
        registerUser
          .save()
          .then(() => {
            res.json({ message: "User created Successfully", success: true });
          })
          .catch((err) => res.json({ message: err.message, success: false }));
      });
    });
  }
});
router.get("/:id", checkAuth, (req, res) => {
  Users.findOne({ _id: req.params.id })
    .then((user) => {
      res.json({ user, success: true });
    })
    .catch((err) => {
      res.json({ success: false, message: err.message });
    });
});
export default router;
