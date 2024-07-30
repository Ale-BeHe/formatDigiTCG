import express, { NextFunction, Request, Response } from 'express' // ESModule
import cors from 'cors'
import morgan from 'morgan'
import fs from 'fs'
import path from 'path'
import helmet from 'helmet'
import cron from 'node-cron'
import cardsRoutes from './routes/cardsRoutes'
import cardCron from './routes/cardCronRoutes'
/* import usersRoutes from './routes/usersRoutes' */
import connectMongoDB from './config/Mongodb'
import { addSecretCardDb } from './services/cardCronServices'

const app = express()

// connection DB
void connectMongoDB()

// reques log history
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// middleware
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-lenght] - :response-time ms :date[web]', { stream: accessLogStream }))

const PORT = 3000

// cron job call
cron.schedule('32 14 * * *', addSecretCardDb)

// url inicial
app.get('/', (_req, res) => {
  res.send('Hellos, fellas!')
})

// routes
app.use('/api/cards', cardsRoutes)
app.use('/api/cardscron', cardCron)
/* app.use('/api/user', usersRoutes) */

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err.stack)
  res.status(500).json({ message: (err as Error).message })
})

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`)
})
