import { Router } from 'express'
import * as cardServices from '../services/cardsServices'

const router = Router()

router.get('/', (_req, res) => {
  res.send(cardServices.getCardsWithOutUsslessInfo())
})
router.get('/:id', (req, res) => {
  const card = cardServices.findCardById(req.params.id)
  return (card != null) ? res.send(card) : res.sendStatus(404)
})

export default router
