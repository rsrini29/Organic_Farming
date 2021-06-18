import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }
  showthis: boolean;
  default: boolean;
  showthat: boolean;
  ngOnInit(): void {
    this.default = true;
    this.showthis = false;
    this.showthat = false;
  }
  regForm(){
    this.router.navigate(['/registraion']);
  }
  myFunction(){
    this.showthis = true;
    this.default = false;
  }
  function(){
    this.showthat = true;
    this.default = false;
  }

}
