const express = require('express');

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


router.get('/image', (req, res) => {
  UsersModel.findUsers(req.params, (error, response) => {
    if (error) console.log('Error is: ', error);
    if (response) {
      res.status.send(response);
    }
  });
});

router.post('/add', (req, res) => {
  UsersModel.addUser(req, (error, response) => {
    if (error) {
      console.log('Error is: ', error);
      res.send(error);
    }
    if (response) {
      // req.session.username = response.username
      console.log('Success response is: ', JSON.stringify(response));
      res.send('User added successfully');
    }
  });
});

router.post('/Signin', (req, res) => {
  UsersModel.findUserForLogin(req.query, (error, response) => {
    if (error) {
      console.log('Error is: ', error);
      res.send(error);
    }
    if (response) {
      if (response.length > 1) {
        req.session.username = response.username;
        console.log('Success response is: ', JSON.stringify(response));
        res.send('User authenticated successfully');
      } else {
        res.status(401).send('User not authenticated');
      }
    }
  });
});

router.put('/update', (req, res) => {
  UsersModel.updateUsers(req.query, (error, response) => {
    if (error) console.log('Error is: ', error);
    if (response) {
      // console.log("Success response is: ", response);
      res.send(response);
    }
  });
});

module.exports = router;
