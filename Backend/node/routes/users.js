const express = require('express');
const isAuth = require('../authCheck/authCheck')
const router = express.Router();
const UsersModel = require('./../models/users');


router.get('/profile/:username', (req, res) => {
  UsersModel.findUsers(
    req.params,
    (response) => {
      if (response) {
        res.status(200).json({
          serverStat: '0',
          request: response,
        });
      }
    },
    (error) => {
      console.log(error);
      res.status(500).json({
        serverStat: '2',
      });
    },
    ' username name description userPhoto followers following postArr ',
    'postArr',
    'title likes thumbnail views description',
  );
});


router.post("/add", (req, res, next) => {
  UsersModel.addUser(req,res);
});


router.post("/login",  (req, res, next) => {
  UsersModel.loginUser(req,res);
});


router.put('/update', isAuth,(req, res) => {
  UsersModel.updateUsers(req.query, (error, response) => {
    if (error) console.log('Error is: ', error);
    if (response) {
      // console.log("Success response is: ", response);
      res.send(response);
    }
  });
});

module.exports = router;
