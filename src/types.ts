export type Color = 'Green' | 'Blue' | 'Purple' | 'Black' | ' Red' | 'Yellow' | 'White' | 'Rainbow' | ''
/* export type  attribute = 'Vaccine'
 */
// muchas veces type e interfaces son intercambiable
// interfas esta pensada para hacer extendida
export interface ICard {
  name: string
  type: string
  id: string
  level: number | string
  play_cost: number | string
  evolution_cost: number | string
  evolution_color: string
  evolution_level: string | number
  xros_req: string
  color: string
  color2: string
  color3: string
  color4: string
  digi_type: string
  digi_type2: string
  form: string
  dp: number | string
  attribute: string
  rarity: string
  stage: string
  artist: string
  main_effect: string
  source_effect: string
  alt_effect: string
  series: string
  pretty_url: string
  date_added: string
  tcgplayer_name: string
  tcgplayer_id: number | string
}

// utilidades
// es importante crear la menor cantidad de tipos
// esta te serviran para crear tipo variado de una interfaz sin tenr que crear un interfaz desde cero

// Pick crea un typo basado en una interfaz elijiendo las propiedades que quieres en el
export type basicInfoCard = Pick<ICard, 'id' | 'name' >
// Omit crea un typo basado en una interfaz elijiendo las propiedades que no quieres emitir
export type NonTcgPlayerInfo = Omit<ICard, 'tcgplayer_name' | 'tcgplayer_id' | 'date_added' | 'pretty_url'>

export type GuessCardData = Pick<
ICard, 'id' | 'name' | 'type' | 'level' |
'play_cost' | 'color' | 'color2' | 'color3' |
'color4' | 'form' | 'digi_type' | 'digi_type2' | 'dp' |
'attribute' | 'rarity'
>

// export type Rol = 'Root' | 'Admin' | 'Maintainer' | 'User' | 'VIPUser'
export enum Rol {
  Root = 'Root',
  Admin = 'Admin',
  Maintainer = 'Maintainer',
  User = 'User',
  VIPUser = 'VIPUser',

}

export interface IUser {
  id: number
  username: string
  email: string
  password: string
  commentary: string
  dateRegister: string
  rol: Rol
}

export type UserNoSensitivityInfo = Omit<IUser, 'password' | 'commentary'>
export type NewUser = Omit<IUser, 'id'>
