/* import { Router } from 'express'
import * as userServices from '../services/userServices'
import toNewUserEntry from '../utils/utils'

const router = Router()

router.get('/login', (_req, res) => {
  res.send('devuelve user')
})

router.post('/singup', (req, res) => {
  try {
    const newUserEntry = toNewUserEntry(req.body)
    const response = userServices.addUser(newUserEntry)
    res.send(response)
  } catch (err) {
    if (err instanceof Error) {
      res.status(404).send(err.message)
    }
    res.sendStatus(404)
  }
})

router.get('/', (_req, res) => {
  res.send(userServices.getAllUser())
})

router.get('/:id', (req, res) => {
  const user = userServices.getUserById(+req.params.id)
  return (user != null) ? res.send(user) : res.sendStatus(404)
})

export default router
 */
