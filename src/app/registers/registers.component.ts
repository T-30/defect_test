import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})
export class RegistersComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  homepro(){
    this.router.navigateByUrl('/homepro')
  }
  create(){
    this.router.navigateByUrl('/createdefect')
  }
  board(){
    this.router.navigateByUrl('/board')
  }
  exit(){
    this.router.navigateByUrl('/home')
  }

}
