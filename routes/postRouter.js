const express = require("express");
const { cctest } = require("../controllers/points");
const postRouter = express.Router();
postRouter.post("/cctest", cctest);
module.exports = postRouter;
