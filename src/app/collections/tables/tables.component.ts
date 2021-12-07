import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  @Input() classNames=''
  @Input() data=[{name:'',age:0, job:''}];
  @Input() headers=[{key:'', label:''}];

  constructor() { }

  ngOnInit(): void {
  }

}
