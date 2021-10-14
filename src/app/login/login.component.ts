import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { DatalogService } from '../datalog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public input: any;
  username: any;
  password: any;
  name: any;

  constructor(
    private router : Router,
    // private datauser : DatalogService,
    private http : HttpClient
  ){
    
  }

  ngOnInit(): void {
  }

  regis(){
    this.router.navigateByUrl('/register')
  }
 
  login(){
    console.log('pass');
    let json = {username: this.username, password: this.password}

    console.log(this.username);
    console.log(this.password);
    
    this.http.post('http://report.comsciproject.com/report/login', JSON.stringify(json))
      .subscribe(response => {
      console.log(response);
      console.log('success');
      this.router.navigateByUrl('/home')
    },error => { 
      console.log('fail');
      console.log(error);
    });
  }

  logi(){
    console.log('pass');
    this.router.navigateByUrl('/home')
  }
  
  user(){
    // let json = {name: this.username}
    this.http.get('http://report.comsciproject.com/report/emp')
    .subscribe(data => {
      console.log(data);
    },error => {
      console.log('fail');
      console.log(error);
    });
  }

  // public loginn() {
  // let request = this.http.get('http://localhost:4200/login');
  //   if (this.input.username && this.input.password) {
  //     let headers = new HttpHeaders({ 'content-type': 'application/json' });
  //     this.http.post('http://report.comsciproject.com/report/login', JSON.stringify(this.input), { headers: headers })
  //       .subscribe(result => 
  //         this.router.navigate(['/home'], { 'queryParams': result })
  //       );
  //   }
  // }

    // showName(){
    
  //   this.datauser.user = [
  //       {username:"test123",password:"1234",name:"tesr"},
  //       {username:"test11",password:"123",name:"tesjdfk"},
  //     ];
  //     console.log('succeed'+JSON.stringify(this.datauser.user[0]));
  //     this.router.navigateByUrl('/home')
  // }

}
