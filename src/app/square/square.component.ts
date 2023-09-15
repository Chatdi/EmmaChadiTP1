import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  public listColors: string[] = ['red', 'blue', 'green', 'orange'];

  @Output() event = new EventEmitter();

  public changeColorBtn(value: string) {
    this.event.emit(value);
  }
}