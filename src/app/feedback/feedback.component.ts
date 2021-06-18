import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn ,NgModel, FormGroupDirective, FormArray} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private appService:AppService) { }
  feedbackFormGroup: FormGroup;
  ngOnInit(): void {
    this.createfeedback();
  }
  createfeedback(){
    this.feedbackFormGroup = this.formBuilder.group({
      'feedback1':[''],
      'feedback2':[''],
      'feedback3': [''],
      'feedback4': [''],
      'feedback5': [''],
      'feedback6': [''],
      'feedback7': [''],
    })
  }
    submitFeedbackForm(){
     console.log(this.feedbackFormGroup.value);
    }
  }


