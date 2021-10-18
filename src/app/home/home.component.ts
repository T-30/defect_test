import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import Swal from 'sweetalert2'


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
  searchText : any;

  proname : any;
  prodetails : any;
  prophoto : any;
  prostatus : any;
  pm_id : any;

  fullname : any;
  allproject : any;

  myDate: Date = new Date();
  imgPreview : any;

  dropdownListTest: Array<any> = [];
  dropdownListDev: Array<any> = [];
  emp_select: any =[];

  dropdownSettings:IDropdownSettings={};

  constructor(
    private router : Router,
    private rout : ActivatedRoute,
    private http : HttpClient
  ) {}

  ngOnInit(){

    this.imgPreview = "http://ssl.gstatic.com/accounts/ui/avatar_2x.png";

    if(sessionStorage.getItem("posi_id") == "1"){
      this.isPM = true;
    }

    this.getproject_data();
    this.getemp_data();

    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: false,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log('onItemSelect', item);
    this.emp_select.push({employee_id: item.item_id});
    console.log(this.emp_select);
    
  }

  onItemDeSelect(item: any) {
    console.log('onItemDeSelect', item);

    this.emp_select = this.emp_select.filter(function( obj:any ) {
      return obj.employee_id !== item.item_id;
    });

    console.log(this.emp_select);
  }

  getemp_data()  {
    var url='http://report.comsciproject.com/report/empdata';
    this.http.get(url).subscribe((data :any) => {
      // console.log(JSON.stringify(res));
      let json = JSON.parse(JSON.stringify(data));
       
      var tester = json.tester;
      var dev = json.dev;

      // console.log(json.tester);

      var itemdev = [];
      var itemtest = [];

      for (var s of tester) {
        itemtest.push({item_id: s.employee_id, item_text: s.name});  
      }

      for (var s of dev) {
        itemdev.push({item_id: s.employee_id, item_text: s.name}); 
      }

      this.dropdownListDev = itemdev;
      this.dropdownListTest = itemtest;
      
      // console.log(this.dev) 
     
     },error => { 
       console.log(error);
     });
  }

  getproject_data(){
    var url='http://report.comsciproject.com/report/project/'+sessionStorage.getItem("emp_id");
    console.log(url);  
    let res =  this.http.get(url)
    .subscribe((data :any) => {
      console.log(data);
      this.allproject = data.project_data;
     
    },error => { 
      console.log(error);
    });

  }

  onButtonClick(){
    this.click = !this.click;
    console.log('test');
  }

  board(name:any,id:any){
    this.router.navigateByUrl('/board');
    sessionStorage.setItem("projectname",name);
    sessionStorage.setItem("project_id",id);
  }

  create(){
    var pm_id = sessionStorage.getItem("emp_id");
    let json = {name: this.proname, detials: this.prodetails, photo: this.prophoto, pm_id: pm_id ,employee_member: this.emp_select}
    console.log(json);

    this.http.post('http://report.comsciproject.com/report/createproject', JSON.stringify(json))
      .subscribe((datapro :any) => {
        Swal.fire({
          icon: 'success',
          title: 'Create Project Success!!',
          showConfirmButton: false,
          timer: 1500
        })
      
      if(datapro.status){
        console.log('pass');
        setTimeout(()=> {
          window.location.reload();
        },1000)    
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


}

