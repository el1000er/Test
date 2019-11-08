import { Component, OnInit } from '@angular/core';
import{switchMap} from "rxjs/internal/operators";
import {Car} from "../../shared/car";
import {CarService} from "../../services/car.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  
  carId:number;
  carFound:boolean;
  loading: boolean;
 car: Car;
 
  constructor(private route:ActivatedRoute,private carService:CarService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.car = this.carService.getCar(+params['id']);
     
   //new
   this.loading = true;
   this.route.params.subscribe(async (params) => {
    try {
      this.carId = +params.id;
      this.car = await this.carService.getCarDetail(this.carId);
      this.carFound = true;
      this.loading = false;
    } catch {
     this.carFound = false;
     this.loading = false;
    }
  });

  //some console log
     
      console.log(+ params['id']);
      let ID=(+ params['id']);
      console.log(typeof ID);
     
      
    })
  }

}
