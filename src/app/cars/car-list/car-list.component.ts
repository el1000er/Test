import { Component, OnInit } from '@angular/core';
import {Car} from "../../shared/car";
import {CarService} from "../../services/car.service";
import{Router} from '@angular/router';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  private cars: Car [];

carList:Car[]=[];//new
  constructor(private carService: CarService, private router:Router) { 

   

  }

  async ngOnInit() {

    this.cars = await this.carService.getCars();
    this.carList =this.cars;
  }

  //new
  getCarDetail(id: number): void {
    this.router.navigate(['cars', id]);
  }

}
