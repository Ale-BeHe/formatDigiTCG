
import axios from 'axios'
import { basicInfoCard, ICard, ICardSimpleFormat } from '../types'

export const getAllCardFromDigimonApi = async (): Promise<ICard[]> => {
  const response = await axios({
    url: 'https://digimoncard.io/api-public/search.php?series=Digimon%20Card%20Game',
    method: 'GET'
  }).then(resp => resp.data)

  return response
}

export const getCardByIdFromDigimonApi = async (id: string): Promise<ICard> => {
  const response = await axios({
    url: `https://digimoncard.io/api-public/search.php?series=Digimon%20Card%20Game&card=${id}`,
    method: 'GET'
  }).then(resp => resp.data[0])

  return response
}

export const getAllCardSimpleFormat = async (): Promise<basicInfoCard[]> => {
  const response = await axios({
    url: 'https://digimoncard.io/api-public/getAllCards.php?sort=name&series=Digimon%20Card%20Game&sortdirection=asc',
    method: 'GET'
  }).then(resp => resp.data.map((card: ICardSimpleFormat) => {
    return {
      id: card.cardnumber,
      name: card.name
    }
  }))
  return response
}
