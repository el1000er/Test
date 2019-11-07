import { NgModule } from '@angular/core';
import{MatButtonModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,MatDialogModule,
} from  '@angular/material';


import {MatTableModule} from '@angular/material/table';


const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatInputModule,
  MatGridListModule,
  MatDialogModule,

 
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
