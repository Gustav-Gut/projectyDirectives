import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public photoUsed: any;
  public morePhotosPadre: boolean;

  constructor(){
    this.morePhotosPadre = false;
  }

  funxxPadre(param: any = "hola mundo"){
    console.log('evento padre -->',param);
    this.photoUsed = param;
  }
}
