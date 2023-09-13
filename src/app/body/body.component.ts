import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
public body = 'white';
public colors:string[] = ["red","green","blue","yellow"]

  public changedColor(color: string) {
    this.body = color;
    console.log(this.body)
  };

}
