const express = require('express')
const Router = express.Router();

const HomeControllers = require('../controllers/HomeControllers');
const ErrorControllers = require('../controllers/ErrorControllers');

Router.get('/', HomeControllers.home);
Router.get('/*', ErrorControllers.error);

module.exports = Router