var express = require('express');
var router = express.Router();
 

router.all('/secret1', function (req, res, next) {
  console.log('Accessing the secret section ...1111111111');
  res.send('返回东西了，那就不能再next()了');
  //next(); // pass control to the next handler
});

router.all('/secret2', function (req, res, next) {
  console.log('Accessing the secret section ...22222222222');
  next(); // pass control to the next handler
});

module.exports = router;
