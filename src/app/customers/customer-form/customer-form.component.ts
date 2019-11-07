import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators,FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customerForm: FormGroup;

  constructor(private fb:FormBuilder) { }

  
  
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  

  ngOnInit() {
    /*
    this.customerForm = new FormGroup({
      name : new FormControl(),
      lastName : new FormControl(),
      emailAddress: new FormControl('', [Validators.required, Validators.email]     
    });
      */

      this.customerForm= this.fb.group({
        name:['',Validators.required,Validators.minLength(4)],
        lastName:['',Validators.required,Validators.minLength(4)],
        emailAddress:['',]
      })
  }

  onSubmit(): void{
    console.log(this.customerForm.value);
    window.alert('User successfully added!');
  }

  

}
