import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-testcase',
  templateUrl: './testcase.component.html',
  styleUrls: ['./testcase.component.css']
})
export class TestcaseComponent implements OnInit {
  model: any 
  displayedColumns: string[] = ['testmoduleID', 'modulename', 'testcaseID', 
                                'testdata', 'teststep', 'expectedresult', 'status','remark'];
  dataSource = ELEMENT_DATA;
  dialog: any;

  // testmoduleID: any;
  modulename: any;
  // testcases: any;
  testdata: any;
  teststep: any;
  expectedresult: any;
  status: any;
  remark: any;
  funtname:any;

  isPM : boolean = false;
  isTest : boolean = false;

  pro_name : any;

  constructor(
    private router : Router,
    config: NgbModalConfig, private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
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

  open(content:any) {
    this.modalService.open(content);
  }

  

}
export interface PeriodicElement {
  modulename: string;
  testmoduleID: number;
  testcaseID: number;
  testdata: string;
  teststep: string;
  expectedresult: string;
  status: string;
  remark: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {testmoduleID: 1, modulename: 'กรอก username ที่ไม่ถูกต้อง', testcaseID: 1, testdata: 'abc@com', teststep: '1.กรอกข้อมูลตาม test data', 
  expectedresult: 'ไม่สามารถใช้ username นี้ได้', status: 'pass', remark: 'มีกรอบสีแดงแสดงที่บริเวณ username'},
];