const express = require("express");
const { ccget } = require("../controllers/points");
const getRouter = express.Router();
getRouter.get("/", ccget);
module.exports = getRouter;
