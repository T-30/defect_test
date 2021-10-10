import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createdefect',
  templateUrl: './createdefect.component.html',
  styleUrls: ['./createdefect.component.css'],
  
})
export class CreatedefectComponent implements OnInit {
  title = 'appBootstrap';
  
  model: any;

  constructor(
    private router : Router
  ) { 
  
  }

  ngOnInit(): void {
  }

  onFileSelected(event: any){
    console.log(event);
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
  testcase(){
    this.router.navigateByUrl('/testcase')
  }
  exit(){
    this.router.navigateByUrl('/home')
  }



}
