import { Router } from "express";
import { UsersController } from "../controllers/UsersController";

const userRoutes = Router()
const usersController = new UsersController()

userRoutes.post("/register", usersController.register)
userRoutes.post("/login", usersController.login)

export { userRoutes }
