import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn ,NgModel, FormGroupDirective, FormArray} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private appService:AppService) { }
  displayLogin: boolean;
  displaySched: boolean;
  errorLogin: boolean;
  loginFormGroup: FormGroup;
  schedFormGroup: FormGroup;
  mobile: number;
  activityList: string[] = ["Hyderabad","Delhi"];

  ngOnInit(): void {
    this.createlogin();
    this.createSchedule();
    this.displayLogin = true;
    this.displaySched = false;
    this.errorLogin = false; 
  }
  createlogin(){
    this.loginFormGroup = this.formBuilder.group({
      'number':['',[Validators.required]],
      'password': ['',[Validators.required]]
    })
  }
  createSchedule(){
    this.schedFormGroup = this.formBuilder.group({
      'location':['',[Validators.required]],
      'date': ['',[Validators.required]],
      'activites': ['',[Validators.required]],
      'mobileNum': ['']
    })
  }
  submitForm(){
    console.log(this.loginFormGroup.get('number').value);
    console.log(this.loginFormGroup.get('password').value);
    this.mobile = this.loginFormGroup.get('number').value;
    let num = this.loginFormGroup.get('number').value;
    let pass = this.loginFormGroup.get('password').value;
    console.log(JSON.stringify(this.loginFormGroup.value))
    if(num == 9494511234 && pass == 'password'){
      this.displayLogin = false;
      this.displaySched = true;
      this.errorLogin = false; 
    }
    else{
      this.errorLogin = true; 
    }
  }
  submitSched(){
    console.log(this.schedFormGroup.value);
    console.log(JSON.stringify(this.schedFormGroup.value))
    this.schedFormGroup.get('mobileNum').setValue(this.loginFormGroup.get('number').value)
    console.log(JSON.stringify(this.schedFormGroup.value))
  }
}
