import { Schema, model } from 'mongoose'
import { GuessCardDataSecret } from '../types'

const cardCronSchema = new Schema<GuessCardDataSecret>({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: false
  },
  level: {
    type: String,
    required: false
  },
  play_cost: {
    type: String,
    required: false
  },
  color: {
    type: String,
    required: true
  },
  color2: {
    type: String,
    required: false
  },
  color3: {
    type: String,
    required: false
  },
  color4: {
    type: String,
    required: false
  },
  form: {
    type: String,
    required: false
  },
  digi_type: {
    type: String,
    required: false
  },
  digi_type2: {
    type: String,
    required: false
  },
  dp: {
    type: String,
    required: false
  },
  attribute: {
    type: String,
    required: false
  },
  rarity: {
    type: String,
    required: true
  },
  date_added: {
    type: String,
    required: true
  }
})

const CardCron = model<GuessCardDataSecret>('Card', cardCronSchema)

export default CardCron
