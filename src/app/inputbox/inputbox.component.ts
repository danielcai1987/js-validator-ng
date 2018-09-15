import { Component, OnInit, Input } from '@angular/core';
import { JSHINT } from 'jshint';
import { Data } from '../data'

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.scss']
})
export class InputboxComponent implements OnInit {
  @Input() data:Data

  content:string
  errors:[string]
  valid:boolean

  options = {
    undef: true
  };
  predef = {
    foo: false
  };

  constructor() {}

  ngOnInit() {}

  onInput():void{
    JSHINT(this.content, this.options, this.predef);
    this.errors = JSHINT.errors?JSHINT.errors:[]
    if(this.errors.length){
      this.valid = false
    } else{
      if(this.content!=''){
        this.valid = true
      }
    }
  }

  tryInput(input):void{
    switch (input) {
      case 'valid':
        this.content = 'var a = 1;'
        break;
      case 'oneerror':
        this.content = 'var b = 2'
        break;
      case 'moreerror':
        this.content = 'var c !@#= jiofdsja2'
        break;
      case 'clear':
        this.content = ''
        break;
      default:
        break;
    }
    this.onInput()
  }
  
  // checkInput():void{
  //   JSHINT(this.content, this.options, this.predef);
  //     this.errors = JSHINT.errors?JSHINT.errors:[]
  //     if(this.errors.length){
  //       this.valid = false
  //     } else{
  //       if(this.content!=''){
  //         this.valid = true
  //       }
  //     }
  // }
}
