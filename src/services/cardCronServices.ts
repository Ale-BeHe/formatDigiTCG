import { getAllCardSimpleFormat, getCardByIdFromDigimonApi } from '../config/digimonApi'
import CardCron from '../models/cardCronModel'
import { basicInfoCard, GuessCardDataSecret } from '../types'
import { expetionsCard } from './cardsServices'

// cronJob
export const addSecretCardDb = (): void => {
  getRadomCard().then(resp => {
    console.log(`terminando añadicion de carta secreta ${resp}`)
  }).catch(err => {
    console.log(err)
  })
}

// get Random Card
const getRadomCard = async (): Promise<string> => {
  const today = new Date()
  const formatToday = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`
  const arrCard: basicInfoCard[] = await getAllCardSimpleFormat()
  const idRandom: string = await getRandomCardId(arrCard)
  const randomCard: GuessCardDataSecret = await getCardByIdFromDigimonApi(idRandom).then(resp => {
    return {
      id: resp.id,
      name: resp.name,
      type: resp.type,
      level: resp.level != null ? resp.level : '',
      play_cost: resp.play_cost != null ? resp.play_cost : '',
      color: resp.color,
      color2: resp.color2 != null ? resp.color2 : '',
      color3: expetionsCard(resp.id),
      color4: '',
      form: resp.form != null ? resp.form : '',
      digi_type: resp.digi_type != null ? resp.digi_type : '',
      digi_type2: resp.digi_type2 != null ? resp.digi_type2 : '',
      dp: resp.dp != null ? resp.dp : '',
      attribute: resp.attribute != null ? resp.attribute : '',
      rarity: resp.rarity,
      date_added: formatToday
    }
  })
  const cardSecretCollection = new CardCron(randomCard)
  await cardSecretCollection.save()
  return randomCard.id
}

// get random ID
const getRandomCardId = async (arr: basicInfoCard[]): Promise<string> => {
  const randomCard = Math.floor(Math.random() * arr.length)
  return arr[randomCard].id
}

export const getChosenCard = async (date: string): Promise<GuessCardDataSecret> => {
  const response = await CardCron.find({ date_added: date }).then(resp => {
    const card = resp[0]
    return {
      id: card.id,
      name: card.name,
      type: card.type,
      level: card.level != null ? card.level : '',
      play_cost: card.play_cost != null ? card.play_cost : '',
      color: card.color,
      color2: card.color2 != null ? card.color2 : '',
      color3: expetionsCard(card.id),
      color4: '',
      form: card.form != null ? card.form : '',
      digi_type: card.digi_type != null ? card.digi_type : '',
      digi_type2: card.digi_type2 != null ? card.digi_type2 : '',
      dp: card.dp != null ? card.dp : '',
      attribute: card.attribute != null ? card.attribute : '',
      rarity: card.rarity,
      date_added: card.date_added
    }
  })
  console.log(response)
  return response
}
