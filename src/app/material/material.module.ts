import { NgModule } from '@angular/core';
import{MatButtonModule,
  MatProgressSpinnerModule,MatToolbarModule,MatCardModule} from  '@angular/material';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';


const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
 
];



@NgModule({
  
  imports: [    
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
