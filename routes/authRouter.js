const express = require('express');
const router = express.Router();
const authController = require('../controller/authControrller')

router.route('/')
      .post(authController.login)

router.route('/refresh')
       .get(authController.refresh)

router.route('/logout')
       .post(authController.logout)

module.exports = router