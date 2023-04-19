import { Name } from '@type';

export interface IUser {
  id: string;
  name: Name;
}

export default class User implements IUser {
  public id: string;
  public name: Name;

  constructor(props: IUser) {
    this.id = props.id;
    this.name = props.name;
  }
}