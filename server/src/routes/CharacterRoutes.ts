import { Router } from "express";
import { CharactersController } from "../controllers/CharactersController";

const characterRoutes = Router()
const charactersController = new CharactersController()

characterRoutes.post("/new-character", charactersController.newCharacter)

export { characterRoutes }
