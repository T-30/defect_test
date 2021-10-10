import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatalogService } from '../datalog.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  click : boolean = false;

  constructor(
    private router : Router,
    private dataname : DatalogService
  ) {
    // console.log(dataname.user[0].name);
   }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.click = !this.click;
    console.log('test');
  }

  homepro(){
    this.router.navigateByUrl('/homepro')
  }

}

