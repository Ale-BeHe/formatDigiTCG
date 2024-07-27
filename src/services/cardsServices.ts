import axios from 'axios'
import cardsData from '../db/cards.json'
import { basicInfoCard, GuessCardData, ICard } from '../types'
// ".tsx", "ts","node", ".js",".json" auto completado extensiones en tyypescript

const cards: ICard[] = cardsData as ICard[]

export const getCards = (): ICard[] => cards

export const getCardsWithOutUsslessInfo = async (): Promise<GuessCardData[]> => {
  const aux2: GuessCardData[] = await getData().then(resp => {
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
  return aux2
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

const getData = async (): Promise<ICard[]> => {
  const response = await axios({
    url: 'https://digimoncard.io/api-public/search.php?series=Digimon%20Card%20Game',
    method: 'GET'
  }).then(resp => resp.data)

  const data = await response
  return data
}

const expetionsCard = (id:string):string=>{
  
  if(id==='EX7-037' || id==='BT16-102'){
    return 'Black'
  }
  else if(id==='EX7-074'){
    return 'Purple'
  }
  else{
    return ''
  }

}