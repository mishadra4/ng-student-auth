import {Group} from './group';

export class Subject {
  private _id: number;

  private _name: string;

  private _lecturerUsername: string;

  private _groups: Group[];

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get lecturerUsername(): string {
    return this._lecturerUsername;
  }

  set lecturerUsername(value: string) {
    this._lecturerUsername = value;
  }

  get groups(): Group[] {
    return this._groups;
  }

  set groups(value: Group[]) {
    this._groups = value;
  }
}
