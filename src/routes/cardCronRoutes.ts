import { Router } from 'express'
import asyncHandler from '../utils/asyncHandler'
import { getSecretCard } from '../controllers/cardCronController'

const router = Router()

router.get('/:date', asyncHandler(getSecretCard))

export default router
