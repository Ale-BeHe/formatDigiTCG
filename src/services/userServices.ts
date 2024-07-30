// import { IUser, NewUser, UserNoSensitivityInfo } from '../types'

// const users: IUser[] = userData as IUser[] // sercion de tipo, se usa cuando no controlamos los datos que nos llega de un json de otra api

// export const getAllUser = (): IUser[] => users

/* export const getAllUserNoSesitivityInfo = (): UserNoSensitivityInfo[] => {
  const userFirterInfor = users.map((user) => {
    const { commentary, password, ...userNoSensitivy } = user
    return userNoSensitivy
  })
  return userFirterInfor
} */

/* export const getUserById = (id: number): UserNoSensitivityInfo | undefined => {
  const userFilter = users.find((user) => user.id === id)
  if (userFilter != null) {
    const { commentary, password, ...userInfo } = userFilter
    return userInfo
  }
  return userFilter
} */

/* export const addUser = (newUserEntry: NewUser): IUser | undefined => {
  try {
    const newUser = {
      id: Math.max(...userData.map(user => user.id)) + 1,
      ...newUserEntry
    }
    userData.push(newUser)
    return newUser
  } catch {
    return undefined
  }
} */
