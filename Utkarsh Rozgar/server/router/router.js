const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
require('../Database/connection');
const User = require('../model/userSchema');

// configuring MiddleWare
const middleware = (req, res, next) => {
  next();
};

// creating routes
router.get('/', (req, res) => {
  res.send('Hello this is HOME routing');
});

router.get('/about', middleware, (req, res, next) => {
  res.send('Hello this is ABOUT routing');
});

router.get('/login', (req, res) => {
  res.send('Hello this is LOGIN routing');
});

router.post('/forgotpassword', async (req, res) => {
  createResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');
    this.resetToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');
    this.resetTokenExpires = Date.now() + 10 * 60 * 1000;
    return resetToken;
  };
  try {
    const { email } = req.body;
    const registeredUser = await User.findOne({ email: email });
    if (!registeredUser) {
      res.status(404).json({ message: 'User not Found', state: false });
    }
    const token = createResetToken();
    registeredUser.token = token;
    console.log(token);
    await registeredUser.save({ validateBeforeSave: false });
    res.status(200).json({ message: 'Token sent to email', state: true });
  } catch (err) {
    console.log(err);
  }
});

router.post('/resetpassword', (req, res) => {
  const { token, password, confirmPassword } = req.body;
  if (!token) {
    res.status(404).json({ message: 'Token not found', state: false });
  }
User.findOne({ token: token })
    .then((user) => {
      if (!user) {
        res.status(404).json({ message: 'User not found', state: false });
      }
      user.password = password;
      user.confirmPassword = confirmPassword;
      user
        .save()
        .then(() => {
          res.status(200).json({ message: 'Password updated', state: true });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});



router.post('/signup', async (req, res) => {
  const { name, email, phone, role, password, confirmPassword } = req.body;
  const user = new User({ name, email, phone, role : req.body.role, password, confirmPassword });

  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      console.log('ERROR : USER ALREADY EXISTS');
      return res.status(500).send('ERROR : USER ALREADY EXISTS');
    }
    let saved = await user.save();
    if (saved) {
      console.log('USER ADDED SUCCESSFULLY');
      res.status(201).send('USER ADDED SUCCESSFULLY');
    }
  } catch (err) {
    console.log(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const registeredUser = await User.findOne({ email: email });
    
    console.log(email, password, role);
    console.log(role);
    console.log(registeredUser);

    // checking users existence
    if (!registeredUser || registeredUser.role !== role) {
      res.status(404).json({ message: 'User not Found', state: false });
    }

    // comparing passwords
    console.log(password);
    console.log(registeredUser.password);

    const isMatch = await bcrypt.compare(password, registeredUser.password);
    console.log(isMatch);

    if (!isMatch) {
      return res
        .status(500)
        .json({ message: 'Invalid Credentials', state: false });
    }
    return res.status(200).json({
      message: 'Login Successful',
      name: registeredUser.name,
      state: true,
    });
  }
    catch (err) {
        console.log(err);
  }
        
    
});

module.exports = router;