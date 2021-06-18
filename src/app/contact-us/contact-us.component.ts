import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn ,NgModel, FormGroupDirective, FormArray} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private appService:AppService) { }
  contactFormGroup: FormGroup;
  ngOnInit(): void {
    this.createcontact();
  }
  createcontact(){
    this.contactFormGroup = this.formBuilder.group({
      'name':['',[Validators.required]],
      'contact':['',[Validators.required]],
      'email': ['',[Validators.required]],
      'description' :['',[Validators.required]]
    })
  }
  submitContactForm(){
    console.log(JSON.stringify(this.contactFormGroup.value))
    let data = JSON.stringify(this.contactFormGroup.value)
    this.appService.getcontactDetails(JSON.stringify(data)).subscribe(
      res=>{
        console.log("Output Success")
        console.log(res)
    },
    error=>{
      console.log("We ran into some error");
      console.log(error);
    });
  }

}
