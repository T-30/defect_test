import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
