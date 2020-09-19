import { Model } from './Model'
import { Attributes } from './Attributes'
import { ApiSync } from './ApiSync'
import { Eventing } from './Eventing'

export interface UserProps {
  id?: number
  name?: string
  age?: number
}

const rootUrl = 'http://localhost:3000/users'

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    )
  }

  // Move attibutes to the class Model
  // public events: Eventing = new Eventing()
  // public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl)
  // public attributes: Attributes<UserProps>
  // constructor(attrs: UserProps) {
  //   this.attributes = new Attributes<UserProps>(attrs)
  // }
  // on(eventName: string, callback: Callback): void {
  //   this.events.on(eventName, callback)
  // }
}
