import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepro',
  templateUrl: './homepro.component.html',
  styleUrls: ['./homepro.component.css']
})
export class HomeproComponent implements OnInit {
 
  sidenav_opened=true;
  @Output() public sidenavToggle = new EventEmitter();

  isPM : boolean = false;
  isTest : boolean = false;

  visible : boolean = false;
  
  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("posi_id") == "1"){
      this.isPM = true;
    }
    if(sessionStorage.getItem("posi_id") == "2"){
      this.isTest = true;
    }
    // if(this.isTest =='/createdefect'){

    // }
    // this.visible = true;
  }

  public onToggleSidenav = () => { 
    this.sidenavToggle.emit();
  }

}
