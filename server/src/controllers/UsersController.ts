import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

class UsersController { }

export { UsersController }
