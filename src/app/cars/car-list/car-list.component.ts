import { Component, OnInit } from '@angular/core';
import {Car} from "../../shared/car";
import {CarService} from "../../services/car.service";


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  private cars: Car [];

  constructor(private carService: CarService) { 

   

  }

  async ngOnInit() {

    this.cars = await this.carService.getCars();
  }

}
