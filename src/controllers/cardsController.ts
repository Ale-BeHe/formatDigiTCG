import { NextFunction, Request, Response } from 'express'
import * as cardService from '../services/cardsServices'

export const getAllCards = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const response = await cardService.getCardsWithOutUsslessInfo()
    res.status(201).json(response)
  } catch (err) {
    next(err)
  }
}

export const cardById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const response = await cardService.findCardById(req.params.id)
    res.status(201).json(response)
  } catch (err) {
    next(err)
  }
}
