import {Group} from './group';
import {Subject} from './subject';

export class Lecture {
  private _id: string;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  private _lectureDate: Date;

  get lectureDate(): Date {
    return this._lectureDate;
  }

  set lectureDate(value: Date) {
    this._lectureDate = value;
  }

  private _formattedDate: string;


  get formattedDate(): string {
    return this._formattedDate;
  }

  set formattedDate(value: string) {
    this._formattedDate = value;
  }

  private _qrCodeEndDate: string;

  get qrCodeEndDate(): string {
    return this._qrCodeEndDate;
  }

  set qrCodeEndDate(value: string) {
    this._qrCodeEndDate = value;
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

  private _groups: Group[];

  get groups(): Group[] {
    return this._groups;
  }

  set groups(value: Group[]) {
    this._groups = value;
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
}
