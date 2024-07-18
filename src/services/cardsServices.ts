import cardsData from '../db/cards.json'
import { basicInfoCard, GuessCardData, ICard } from '../types'
// ".tsx", "ts","node", ".js",".json" auto completado extensiones en tyypescript

const cards: ICard[] = cardsData as ICard[]

export const getCards = (): ICard[] => cards

export const getCardsWithOutUsslessInfo = (): GuessCardData[] => {
  return cards.map((aux) => {
    return {
      id: aux.id,
      name: aux.name,
      type: aux.type,
      level: aux.level,
      play_cost: aux.play_cost,
      color: aux.color,
      color2: aux.color2,
      color3: '',
      color4: '',
      form: aux.form,
      digi_type: aux.digi_type,
      digi_type2: aux.digi_type2,
      dp: aux.dp,
      attribute: aux.attribute,
      rarity: aux.rarity
    }
  })
}

export const findCardById = (id: string): basicInfoCard | undefined => {
  const filter = cardsData.find(card => card.id === id)

  if (filter !== undefined) {
    const aux = {
      id: filter.id,
      name: filter.name
    }
    return aux
  }

  return filter
}

export const addEntry = (): string => {
  return 'string'
}

/* function filterObject<ICard, K extends keyof ICard> (obje: ICard, keys: K[]): Pick<ICard, K> {
  return Object.fromEntries(
    Object.entries(obje).filter(([key]) => keys.includes(key as K))
  ) as Pick<ICard, K>
}

const filteredObj = filterObject(cards, ['name', 'id']); */
