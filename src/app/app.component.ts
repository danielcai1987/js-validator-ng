import { Component, OnInit } from '@angular/core';
import { Data } from './data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // source = [
  //   'function goo() {}',
  //   'foo = 3;'
  // ];

  content:string
  
  // JSHINT(source, options, predef);
  
  
  // onInput(value) {
  //   this.content = 'Hi'+value;
  // }
  constructor() {
    
  }

  ngOnInit() {
  }

  onSelect(data: Data): void {
    this.content = data.content;
  }
}
