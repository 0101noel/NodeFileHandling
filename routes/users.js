const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '123456') {
    res.render('register');
  } else {
    res.send('Username or password is incorrect');
  }
});

router.post('/register', (req, res) => {
  const { firstname, lastname, address, age, email } = req.body;
  const data = `First Name: ${firstname} Last Name: ${lastname} Address: ${address} Age: ${age} Email: ${email}`;
  fs.writeFileSync('user.txt', data);
  res.send(`User information saved to user.txt`);
});

module.exports = router;
