import {Rent} from './rent';

export class Car {
    public Id: number;
    public Mark: string ;
    public Model: string;
    public Status: string;
    public Image: string;
    public Rent:[{
      'startDate': string,
      'endDate':string
    }];
  
    constructor() {
      this.Id=-1;
      this.Mark = '';
    }
  }