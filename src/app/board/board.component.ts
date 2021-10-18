import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowdefectComponent } from '../showdefect/showdefect.component';
// import { TestcaseComponent } from '../testcase/testcase.component';



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  titel_name: any;
  environment: any;
  step_to_reproduce: any;
  actual_result: any;
  expected_result: any;
  due_date: any;
  status: any;
  severity: any;
  assignees: any;

  username: any;

  isPM : boolean = false;
  isTest : boolean = false;
  // isDev : boolean = false;

  pro_name : any;
  
  constructor(
    private router : Router,
    public dialog : MatDialog,
    private rout : ActivatedRoute,
    private http : HttpClient
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
    // console.log(sessionStorage.getItem("projectname"));
    
  }

  openDialog() {
    const dialogRef = this.dialog.open(ShowdefectComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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
    this.router.navigateByUrl('/home');
  }


}
 