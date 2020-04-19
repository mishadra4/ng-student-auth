import {Group} from './group';
import {Subject} from './subject';

export class Lab {
  private _id: string;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  private _orderNumber: number;

  get orderNumber(): number {
    return this._orderNumber;
  }

  set orderNumber(value: number) {
    this._orderNumber = value;
  }

  private _description: string;

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  private _group: Group;

  get group(): Group {
    return this._group;
  }

  set group(value: Group) {
    this._group = value;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  private _lecturerUsername: string;

  get lecturerUsername(): string {
    return this._lecturerUsername;
  }

  set lecturerUsername(value: string) {
    this._lecturerUsername = value;
  }

  private _subject: Subject;

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  private _filePath: string;

  get filePath(): string {
    return this._filePath;
  }

  set filePath(value: string) {
    this._filePath = value;
  }

  private _labDate: Date;

  get labDate(): Date {
    return this._labDate;
  }

  set labDate(value: Date) {
    this._labDate = value;
  }

  private _formattedLabDate: string;

  get formattedLabDate(): string {
    return this._formattedLabDate;
  }

  set formattedLabDate(value: string) {
    this._formattedLabDate = value;
  }
}
