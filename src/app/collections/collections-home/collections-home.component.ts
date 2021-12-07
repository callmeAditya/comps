import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data=[
    {name:'Boby', age:27, job:'Engg'},
    {name:'Mike', age:29, job:'Engg'},
    {name:'Lily', age:26, job:'Designer'},
  ];

  headers=[
    {key:'name', label:'Name'},
    {key:'age', label:'Age'},
    {key:'job', label:'Job'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
