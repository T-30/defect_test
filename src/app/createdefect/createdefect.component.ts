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

  title_name: any;
  environment: any;
  step_to_reproduce: any;
  actual_result: any;
  expected_result: any;
  attachment: any;
  
  due_date: any;
  status: any;
  severity: any;
  assignees: any;


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
