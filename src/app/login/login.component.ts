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
  position: any;
  

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
    // console.log('pass');
    let json = {username: this.username, password: this.password}

    this.http.post('http://report.comsciproject.com/report/login', JSON.stringify(json))
      .subscribe((response :any) => {

      sessionStorage.setItem("posi_id", response.user_data[0].position_id);
      sessionStorage.setItem("emp_id", response.user_data[0].employee_id);
      console.log(response.user_data[0].position_id);
      console.log('login success');
      
      if(response){
        this.router.navigateByUrl('/home/'+this.username);
      }else{
        console.log('login fail');
      }
      
    },error => { 
      console.log('fail');
      console.log(error);
    });
    // console.log('user'+JSON.stringify(json));
  }

  // user(){
  //   this.http.get('http://report.comsciproject.com/report/empp')
  //   .subscribe(data => {
  //     console.log(data);
  //     this.position= data;
  //   },error => {
  //     console.log('fail');
  //     console.log(error);
  //   });
  // }



}
