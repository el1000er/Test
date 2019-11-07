import { Component, OnInit } from '@angular/core';
import {Car} from "../../shared/car";
import {CarService} from "../../services/car.service";
import{switchMap} from "rxjs/internal/operators";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
public car:Car;

  constructor(private route:ActivatedRoute,private carService:CarService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.car = this.carService.getCar(+params['id']);


      console.log(+ params['id']);
      let ID=(+ params['id']);
      console.log(typeof ID);
      
    })
  }

}
