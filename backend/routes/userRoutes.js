import express from 'express'

import { logInUser,registerUser,adminLogIn } from '../controllers/userController.js'


const userRouter =express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login',logInUser)
userRouter.post('/admin', adminLogIn)


export default userRouter;