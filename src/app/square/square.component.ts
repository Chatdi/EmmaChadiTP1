import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  listColors: string[]=['red','blue','green','orange'];
  
  @Output()event = new EventEmitter();

  public changeColorbtn(value:string){
    this.event.emit(value);
    console.log(value);
  }
}
