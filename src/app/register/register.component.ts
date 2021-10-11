import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: any;
  name: any;
  lastname: any;
  password: any;
  phone: any;
  position: any;
  photo: any;


  constructor(
    private router : Router
    
    // private http : HttpClient
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.router.navigateByUrl('/login')
  }

}
