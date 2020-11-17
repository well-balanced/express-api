import { Sequelize, Model, DataTypes, Optional } from 'sequelize'

interface UserAttributes {
  id: number
  email: string
  name: string
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class UserModel extends Model<UserAttributes, UserCreationAttributes> {
  public id: number
  public email: string | null
  public name: string | null
  public readonly createdAt: Date
}

export function init(sequelize: Sequelize) {
  UserModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      email: {
        type: new DataTypes.STRING(100),
        allowNull: false,
      },

      name: {
        type: new DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'user',
      timestamps: false,
    },
  )
}

export function associate() {}
