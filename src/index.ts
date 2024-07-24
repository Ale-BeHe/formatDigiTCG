import express from 'express' // ESModule
import cors from 'cors'
import morgan from 'morgan'
import fs from 'fs'
import path from 'path'
import helmet from 'helmet'
import cards from './routes/cards'
import user from './routes/users'

const app = express()
const accessLogStream = fs.createWriteStream(path.join(__dirname,'access.log'), { flags: 'a'})

app.use(helmet()) 
app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-lenght] - :response-time ms :date[web]', { stream: accessLogStream }))

const PORT = 3000

app.get('/', (_req, res) => {
  res.send('Hellos, fellas!')
})

app.use('/api/cards', cards)
app.use('/api/user', user)

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`)
})
