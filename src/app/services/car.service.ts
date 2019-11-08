import { Injectable } from '@angular/core';
import {Car} from '../shared/car';
import {Observable, of} from 'rxjs/index';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  private cars : Car[];
  private car:Car[];

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


  public getCar(id: number): Car {
    return this.cars.filter(c=> c.Id === id)[0]; 
      
  }

  //new
  public getCarDetail(id:number):Promise<Car>{
    return new Promise<Car>((resolve,reject)=>{
      this.httpService.get<Car>('https://my-json-server.typicode.com/el1000er/jsoncars/cars/'+id).subscribe(
        (car:Car)=>{
          setTimeout(()=>resolve(car),2000);
        },
        (err)=>{
          setTimeout(()=>reject(err),5000);
        });
    });
  }
}
