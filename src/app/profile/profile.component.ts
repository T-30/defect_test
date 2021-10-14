import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  date = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

}
