import { Router } from 'express'
import { cardById, getAllCards } from '../controllers/cardsController'
import asyncHandler from '../utils/asyncHandler'

const router = Router()

router.get('/', asyncHandler(getAllCards))
router.get('/:id', asyncHandler(cardById))
// router.get('/:date',)

export default router
