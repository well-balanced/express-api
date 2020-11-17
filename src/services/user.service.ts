import { UserModel } from '../models'

export class UserService {
  public getUsers() {
    return UserModel.findAll({ limit: 10 })
  }
}

export class User {
  constructor(private model: UserModel, name: string) {}

  get id() {
    return this.model.id
  }

  get name() {
    return this.model.name
  }

  get email() {
    return this.model.email
  }
}
