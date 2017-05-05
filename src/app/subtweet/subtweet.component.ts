import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-subtweet',
  templateUrl: './subtweet.component.html',
  styleUrls: ['./subtweet.component.css']
})
export class SubtweetComponent implements OnInit {
    @Input() text:string;
  constructor() { }

  ngOnInit() {
  }

}
