import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
@Input()color : string='';
@Output()event = new EventEmitter();
public changeColorbtn(value:string){
  this.event.emit(value);
  console.log(value);
}
listColors: string[]=['red','blue','green','orange'];
}
