export class ResultaatModel {
  public static instance:ResultaatModel;
  private _apiOutput:string;
  private _description:string;
  private _hasProcessed: boolean = false;
  private _metrage: number = 0;
  private _artikelnr: string = '';

  constructor(apiOutput: string, description: string) {
    this._apiOutput = apiOutput;
    this._description = description;
  }

  get description(): string {
    return this._description;
  }

  get hasProcessed(): boolean {
    return this._hasProcessed;
  }

  get metrage(): number {
    return this._metrage;
  }

  set metrage(value: number) {
    this._metrage = value;
  }

  get artikelnr(): string {
    return this._artikelnr;
  }

  set artikelnr(value: string) {
    this._artikelnr = value;
  }
}
