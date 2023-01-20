import { NextFunction, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

class CharactersController {
    async newCharacter(req: Request, res: Response, next: NextFunction) {
        try {
            const character = req.body
            const newCharacter = await prisma.character.create({
                data: {
                    userId: character.userId,
                    name: character.name,
                    race: character.race,
                    charClass: character.charClass,
                    level: character.level,
                    experience: character.experience,
                    alignment: character.alignment,
                    background: character.background,
                    hitPoints: character.hitPoints,
                    deathSaves: character.deathSaves,
                    inspiration: character.inspiration,
                    proficiency: character.proficiency,
                    armorClass: character.armorClass,
                    initiative: character.initiative,
                    speed: character.speed,
                    passivePerception: character.passivePerception,
                    attributes: character.attributes,
                    skills: character.skills
                }
            })
            return res.status(201).json({
                status: true,
                user: newCharacter

            })
        } catch (err) {
            next(err)
        }
    }
}

export { CharactersController }
