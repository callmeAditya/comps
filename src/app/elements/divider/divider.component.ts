import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-Divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent implements OnInit {
@Input() title=''
  constructor() { }

  ngOnInit(): void {
  }

}
