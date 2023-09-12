import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EmmaChadiTP1';
  colors: string='';

  public changeColor(color:string){
    this.colors = color;
  }
}

