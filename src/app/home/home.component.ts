import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  click : boolean = false;
  username : any;
  project : any;
  isPM : boolean = false;
  position:any;

  proname : any;
  prodetails : any;
  prophoto : any;
  prostatus : any;
  pm_id : any;

  fullname : any;
  allproject : any;

  myDate: Date = new Date();
  imgPreview : any;


  constructor(
    private router : Router,
    private rout : ActivatedRoute,
    private http : HttpClient
  ) {
    // console.log(dataname.user[0].name);
    this.username = rout.snapshot.params['username'];
    console.log('user'+this.username);
    
    
   }

  async ngOnInit(){

    this.imgPreview = "http://ssl.gstatic.com/accounts/ui/avatar_2x.png";
    // let response:any = await this.getUser();
    // console.log(response);
    // let respon = await this.getPro();
    // console.log(respon);
    if(sessionStorage.getItem("posi_id") == "1"){
      this.isPM = true;
    }

    // this.fullname = response.name + ' ' + response.lastname;
    var url='http://report.comsciproject.com/report/project/'+sessionStorage.getItem("emp_id");
    console.log(url);
    
    let res =  this.http.get(url)
    .subscribe((data :any) => {
      console.log(data);
      this.allproject = data.project_data;
     
    },error => { 
      console.log(error);
    });

    // let respon = this.http.get('http://report.comsciproject.com/report/empp')
    // .subscribe((datauser :any) => {

    //   // this.fullname = datauser.name + ' ' + datauser.lastname;
    //   this.fullname = datauser;
    //   console.log(datauser);
      
     
    // },error => { 
    //   console.log(error);
    // });
    
    
    
  }

  onButtonClick(){
    this.click = !this.click;
    console.log('test');
  }

  homepro(){
    this.router.navigateByUrl('/homepro')
  }

  create(){

    let json = {name: this.proname, detials: this.prodetails, create_date: this.myDate, photo: this.prophoto, 
                status: this.prostatus, pm_id: this.pm_id}

    this.http.post('http://report.comsciproject.com/report/createproject', JSON.stringify(json))
      .subscribe((datapro :any) => {

      // sessionStorage.setItem("emp_id", datapro.user_data[0].position_id);
      // console.log(datapro.user_data[0].employee_id);
      // console.log('login success');
      
      if(datapro){
        this.router.navigateByUrl('/home');
        console.log('pass');
        
      }else{
        console.log('create fail');
      }
      
    },error => { 
      console.log('fail');
      console.log(error);
    });
    // this.router.navigateByUrl('/home')
  }

  getFile(event : any) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        // console.log(reader.result);
        this.prophoto = reader.result;
        this.imgPreview =reader.result;
      };
   
    }
  }

    // async getUser(){
  //   let response:any = await this.http.get('http://report.comsciproject.com/report/empp')
  //   .toPromise();
  //   this.fullname = response;
    
  //   return response;
  // }

  // async getPro(){
  //   let respon = await this.http.get('http://report.comsciproject.com/report/project')
  //   .toPromise();
  //   return respon;
  // }

}

