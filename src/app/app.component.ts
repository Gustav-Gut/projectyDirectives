import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public available: boolean = true;
  public srcImg: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  public skills: string[] = ['Amistoso', 'Paciente', 'Protector'];

  title = 'projectDirectives';
}
