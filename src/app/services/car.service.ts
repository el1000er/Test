import { Injectable } from '@angular/core';
import {Car} from '../shared/car';
import {Observable, of} from 'rxjs/index';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  private cars : Car[];

  constructor(private httpService:HttpClient) { }

  public getCars():Promise<Car[]>{
    return new Promise ((resolve,reject)=>{
      this.httpService.get<Car[]>('assets/cars.json')
      .subscribe((response)=>{
        this.cars=response;
        resolve(response);
      },
      (error)=>{
        console.log('Error: ',error);
        reject(error);
      }
      );
    });
    
  }


  public getCar(id: number): Car{
    return this.cars.filter(c=> c.Id === id)[0];       
  }
}
