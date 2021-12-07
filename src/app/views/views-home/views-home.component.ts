import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats=[
    {tag:22, para:'Favorites'},
    {tag:967, para:'Page Views'},
    {tag:30, para:'Users'}
  ]

  items = [
    {
      image: '../../../assets/couch.jpeg',
      header: 'Couch',
      descrip: 'Comfortable Couch!'
    },

    {
      image: '../../../assets/dresser.jpeg',
      header: 'Dresser',
      descrip: 'Beautiful Dresser!'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
