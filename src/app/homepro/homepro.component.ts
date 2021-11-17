import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepro',
  templateUrl: './homepro.component.html',
  styleUrls: ['./homepro.component.css']
})
export class HomeproComponent implements OnInit {
 
  sidenav_opened=true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
