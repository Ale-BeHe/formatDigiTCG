import { Router } from 'express'
import * as userServices from '../services/userServices'

const router = Router()

router.get('/login', (_req, res) => {
  res.send('devuelve user')
})

router.post('/singup', (_req, res) => {
  res.send('dse registro user')
})

router.get('/', (_req, res) => {
  res.send(userServices.getAllUser())
})

router.get('/:id', (req, res) => {
  const user = userServices.getUserById(+req.params.id)
  return (user != null) ? res.send(user) : res.sendStatus(404)
})

export default router
