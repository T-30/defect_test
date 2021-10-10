import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ShowdefectComponent } from '../showdefect/showdefect.component';
// import { TestcaseComponent } from '../testcase/testcase.component';



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(
    private router : Router,
    public dialog : MatDialog
  ) { }

  ngOnInit(): void {
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
    this.router.navigateByUrl('/home')
  }

  // todo = [
  //   'Get to work',
  //   'Pick up groceries',
  //   'Go home',
  //   'Fall asleep'
  // ];

  // done = [
  //   'Get up',
  //   'Brush teeth',
  //   'Take a shower',
  //   'Check e-mail',
  //   'Walk dog'
  // ];

  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //                       event.container.data,
  //                       event.previousIndex,
  //                       event.currentIndex);
  //   }
  // }

}
