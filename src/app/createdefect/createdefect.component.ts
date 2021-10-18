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

  isPM : boolean = false;
  isTest : boolean = false;

  pro_name : any;


  constructor(
    private router : Router
  ) { 
  
  }

  ngOnInit(): void {

    if(sessionStorage.getItem("posi_id") == "1"){
      this.isPM = true;
    }
    if(sessionStorage.getItem("posi_id") == "2"){
      this.isTest = true;
    }

    this.pro_name = sessionStorage.getItem("projectname");

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
