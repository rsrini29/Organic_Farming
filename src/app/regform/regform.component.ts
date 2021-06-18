import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn ,NgModel, FormGroupDirective, FormArray} from '@angular/forms';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private appService:AppService) { }
  registrationFormGroup: FormGroup;
  hide: boolean;
  ngOnInit(): void {
    this.hide = true;
    this.createregistration();
  }
  createregistration(){
    this.registrationFormGroup = this.formBuilder.group({
      'name':['',[Validators.required]],
      'mobNum':['',[Validators.required]],
      'address':['',[Validators.required]],
      'pin': ['',[Validators.required]],
      'city': ['',[Validators.required]],
      'password': ['',[Validators.required]],
      'email': ['',[Validators.required]],
      'conPassword' :['',[Validators.required]],
      'comName':['',[Validators.required]]

    })
  }
  submitRegForm(){
    console.log(this.registrationFormGroup.value);
    console.log(JSON.stringify(this.registrationFormGroup.value))
  }

}
