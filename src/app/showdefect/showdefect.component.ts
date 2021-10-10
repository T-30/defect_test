import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showdefect',
  templateUrl: './showdefect.component.html',
  styleUrls: ['./showdefect.component.css']
})
export class ShowdefectComponent implements OnInit {
  model: any;

  constructor() { }

  ngOnInit(): void {
  }
  onFileSelected(event: any){
    console.log(event);
  }

}
