import { NewUser, Rol } from './types'

const parseName = (nameFromRequest: any, field: string): string => {
  if (!isString(nameFromRequest)) {
    throw new Error(`Incorrect or Missing name ${field}`)
  }
  return nameFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or Missing Date')
  }
  return dateFromRequest
}

const parseRol = (rolFromRequest: any): Rol => {
  if (!isString(rolFromRequest) || !isRol(rolFromRequest)) {
    throw new Error('Incorrect or Missing Rol')
  }
  return rolFromRequest
}

const isRol = (param: any): boolean => {
  return Object.values(Rol).includes(param)
}

const isString = (string: any): boolean => {
  return typeof string === 'string' || string instanceof String
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const toNewUserEntry = (obj: any): NewUser => {
  const newUser: NewUser = {
    username: parseName(obj.username, 'name'),
    email: parseName(obj.email, 'E-mail'),
    password: parseName(obj.password, 'Password'),
    commentary: parseName(obj.commentary, 'Commentary'),
    dateRegister: parseDate(obj.dateRegister),
    rol: parseRol(obj.rol)
  }

  return newUser
}

export default toNewUserEntry
