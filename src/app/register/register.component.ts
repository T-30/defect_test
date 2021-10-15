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
  imgPreview : any;


  constructor(
    private router : Router,
    private http: HttpClient
    
    // private http : HttpClient
  ) { }

  ngOnInit(): void {
    this.imgPreview = "http://ssl.gstatic.com/accounts/ui/avatar_2x.png";
  }

  cancel(){
    this.router.navigateByUrl('/login')
  }

  submit(){
    let json = {username: this.username, name: this.name, lastname: this.lastname, password: this.password, 
                phone: this.phone, position_id: this.position, photo: this.photo};

  
  console.log(json);

    this.http.post('http://report.comsciproject.com/report/register', JSON.stringify(json))
      .subscribe(response => {
      console.log('success');
      this.router.navigateByUrl('/login')
    },error => {
      console.log(error);
      console.log('fail');
    }); 
  }

  getFile(event : any) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        // console.log(reader.result);
        this.photo = reader.result;
        this.imgPreview =reader.result;
      };
   
    }
  }


}
