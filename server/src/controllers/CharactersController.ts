import { NextFunction, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

class CharactersController {
    async newCharacter(req: Request, res: Response, next: NextFunction) {
        try {
            const character = req.body
            const newCharacter = await prisma.character.create({
                data: {
                    userId: character.values.userId,
                    name: character.values.name,
                    race: character.values.race,
                    charClass: character.values.charClass,
                    level: parseInt(character.values.level),
                    experience: parseInt(character.values.experience),
                    alignment: character.values.alignment,
                    background: character.values.background,
                    hitPoints: character.values.hitPoints,
                    deathSaves: character.values.deathSaves,
                    inspiration: character.values.inspiration,
                    proficiency: parseInt(character.values.proficiency),
                    armorClass: parseInt(character.values.armorClass),
                    initiative: parseInt(character.values.initiative),
                    speed: parseInt(character.values.speed),
                    passivePerception: parseInt(character.values.passivePerception),
                    attributes: character.values.attributes,
                    skills: character.values.skills
                }
            })
            return res.status(201)
        } catch (err) {
            next(err)
        }
    }

    async getAllCharacters(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.params.id
            const characters = await prisma.character.findMany({
                where: {
                    userId
                },
                select: {
                    id: true,
                    name: true,
                    level: true,
                    race: true,
                    charClass: true
                }
            })
            return res.status(200).json(characters)
        } catch (err) {
            next(err)
        }
    }
}

export { CharactersController }
