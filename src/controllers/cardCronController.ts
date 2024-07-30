import { NextFunction, Request, Response } from 'express'
import * as cardCronService from '../services/cardCronServices'

export const getSecretCard = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const response = await cardCronService.getChosenCard(req.params.date)
    res.status(201).json(response)
  } catch (err) {
    next(err)
  }
}
