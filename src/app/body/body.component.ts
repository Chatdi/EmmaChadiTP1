import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
//@Input()body:string='white';
@Output()event = new EventEmitter();
public changeColor(value:string){
  this.event.emit(value);
}
}