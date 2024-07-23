import express from 'express' // ESModule
import cors from 'cors'
import cards from './routes/cards'
import user from './routes/users'

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 3000

app.get('/', (_req, res) => {
  res.send('Hellos, fellas!')
})

app.use('/api/cards', cards)
app.use('/api/user', user)

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`)
})
