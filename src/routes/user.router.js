const { getAll, create, getOne,destroy } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")  
		.get(getAll)
		.post(create)

userRouter.route("/:id")
	.get(getOne)
	.delete(destroy)
		

module.exports = userRouter;