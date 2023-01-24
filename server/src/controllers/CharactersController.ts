import { NextFunction, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

class CharactersController {
    async newCharacter(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body
            await prisma.character.create({
                data: data.values
            })
            return res.status(201).send()
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
                },
                orderBy: {
                    createdAt: 'desc'
                }
            })
            return res.status(200).json(characters)
        } catch (err) {
            next(err)
        }
    }

    async getCharacter(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.params.userId
            const id = req.params.characterId
            const character = await prisma.character.findMany({
                where: {
                    id,
                    userId
                }
            })
            return res.status(200).json(character)
        } catch (err) {
            next(err)
        }
    }

    async deleteCharacter(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.params.userId
            const id = req.params.characterId

            try {
                await prisma.character.deleteMany({
                    where: {
                        userId,
                        id
                    }
                });
                return res.status(204).send()
            }
            catch {
                return res.status(500).json({ status: false })
            }
        } catch (err) {
            next(err)
        }
    }

    async updateCharacter(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.params.userId
            const id = req.params.characterId
            const data = req.body

            await prisma.character.updateMany({
                where: {
                    userId,
                    id
                },
                data: data.character
            });

            return res.status(200).send()
        } catch (err) {
            next(err)
        }
    }

}

export { CharactersController }
