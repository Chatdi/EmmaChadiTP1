import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-small-square',
  templateUrl: './small-square.component.html',
  styleUrls: ['./small-square.component.scss']
})
export class SmallSquareComponent {
  @Input()colorBtn:string ='';
  @Output() event=new EventEmitter();

  public addEvent(value:string){
    this.event.emit(value);
  }


}



