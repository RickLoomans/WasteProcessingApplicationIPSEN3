export class ResultaatModel {
  public static instance:ResultaatModel;
  private _apiOutput:string;
  private _description:string;
  private _hasProcessed: boolean = false;
  private _metrage: number = 0;


  constructor(apiOutput: string, description: string) {
    this._apiOutput = apiOutput;
    this._description = description;
  }

  public static getInstance() {
    if (this.instance == null) {
      this.instance = new ResultaatModel('Error','Something went wrong');
    }
    return this.instance;
  }

  processApiRespone(response:string) {
    switch (response) {
      case 'magazijn':
        this._apiOutput = 'Magazijn';
        this._description = 'De klant wil de reststof niet de stof moet naar het magazijn';
        break;
      case 'retour':
        this._apiOutput = 'Retour';
        this._description = 'De klant wil de reststof graag retour gestuurd krijgen';
        break;
      default:
        this._apiOutput = response;
        this._description = 'Niemand wil de reststof breng de stof naar de juiste afvalcategorie';
    }
    this._hasProcessed = !this._hasProcessed;
  }

  get apiOutput(): string {
    return this._apiOutput;
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
}
