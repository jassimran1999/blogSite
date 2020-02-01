const express = require('express');
const isAuth = require('../authCheck/authCheck')
const router = express.Router();
const UsersModel = require('./../models/users');
const path = require('path')
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, '../images/'));
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});







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
    ' username name description userPhoto followers following postArr email',
    'postArr',
    'title likes thumbnail views description',
  );
});


router.post("/add",upload.single('userPhoto'), (req, res, next) => {
  console.log(req.file.path);
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
