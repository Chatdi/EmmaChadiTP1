import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  
  colors: string='';

  public changeColorBackground(newItem:string){
    this.colors = newItem;
  }
}
