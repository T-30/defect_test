import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testcase',
  templateUrl: './testcase.component.html',
  styleUrls: ['./testcase.component.css']
})
export class TestcaseComponent implements OnInit {
  model: any 
  displayedColumns: string[] = ['testmoduleID', 'modulename', 'testcaseID', 
                                'testcases', 'testdata', 'teststep', 'expectedresult', 'status'];
  dataSource = ELEMENT_DATA;

  constructor(
    private router : Router
  ) { }

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
export interface PeriodicElement {
  modulename: string;
  testmoduleID: number;
  testcaseID: number;
  testcases: string;
  testdata: string;
  teststep: string;
  expectedresult: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {testmoduleID: 1, modulename: 'Hydrogen', testcaseID: 1, 
  testcases: 'Hmnkj', testdata: 'Hiiii', teststep: 'Hedd', expectedresult: 'Hedd', status: 'pass'},

  {testmoduleID: 1, modulename: 'Hydrogen', testcaseID: 2, 
  testcases: 'lodhfjdf', testdata: 'sssHe', teststep: 'Hessddd', expectedresult: 'gdsg', status: 'pass'},
  // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',testdata: 'tserr'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];