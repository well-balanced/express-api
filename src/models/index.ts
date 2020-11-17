import { Sequelize, Options } from 'sequelize'
import {
  init as initUserModel,
  associate as associateUserModel,
} from './User.model'

export * from './User.model'

export function init(url: string, options: Options = {}) {
  const sequelize = new Sequelize(url, options)

  initUserModel(sequelize)
  associateUserModel()

  return sequelize
}
