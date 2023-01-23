import { Router } from "express";
import { CharactersController } from "../controllers/CharactersController";

const characterRoutes = Router()
const charactersController = new CharactersController()

characterRoutes.post("/new-character", charactersController.newCharacter)
characterRoutes.get("/all-characters/:id", charactersController.getAllCharacters)
characterRoutes.delete("/delete-character/:userId/:characterId", charactersController.deleteCharacter)
characterRoutes.get("/get-character/:userId/:characterId", charactersController.getCharacter)
characterRoutes.patch("/update-character/:userId/:characterId", charactersController.updateCharacter)

export { characterRoutes }
