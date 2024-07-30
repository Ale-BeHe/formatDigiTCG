import { getAllCardFromDigimonApi, getCardByIdFromDigimonApi } from '../config/digimonApi'
import { basicInfoCard, GuessCardData } from '../types'
// ".tsx", "ts","node", ".js",".json" auto completado extensiones en tyypescript

export const getCardsWithOutUsslessInfo = async (): Promise<GuessCardData[]> => {
  const cards: GuessCardData[] = await getAllCardFromDigimonApi().then(resp => {
    return resp.map((aux) => {
      return {
        id: aux.id,
        name: aux.name,
        type: aux.type,
        level: aux.level != null ? aux.level : '',
        play_cost: aux.play_cost != null ? aux.play_cost : '',
        color: aux.color,
        color2: aux.color2 != null ? aux.color2 : '',
        color3: expetionsCard(aux.id),
        color4: '',
        form: aux.form != null ? aux.form : '',
        digi_type: aux.digi_type != null ? aux.digi_type : '',
        digi_type2: aux.digi_type2 != null ? aux.digi_type2 : '',
        dp: aux.dp != null ? aux.dp : '',
        attribute: aux.attribute != null ? aux.attribute : '',
        rarity: aux.rarity
      }
    })
  })
  return cards
}

export const findCardById = async (id: string): Promise<basicInfoCard> => {
  const resp: basicInfoCard = await getCardByIdFromDigimonApi(id).then(resp => {
    return {
      id: resp.id,
      name: resp.name
    }
  })
  return resp
}

export const expetionsCard = (id: string): string => {
  if (id === 'EX7-037' || id === 'BT16-102') {
    return 'Black'
  } else if (id === 'EX7-074') {
    return 'Purple'
  } else {
    return ''
  }
}
