import express from "express"
import cors from "cors"

import { userRoutes } from "./routes/UserRoutes"
import { characterRoutes } from "./routes/CharacterRoutes"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/auth", userRoutes)
app.use("/api/character", characterRoutes)

const server = app.listen(3333, () => console.log('Listening on port 3333'))
