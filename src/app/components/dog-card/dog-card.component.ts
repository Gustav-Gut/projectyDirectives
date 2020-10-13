import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.css']
})
export class DogCardComponent implements OnInit {

  public available: boolean = true;
  public srcImg: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  public skills: string[] = ['Amistoso Agil', 'Paciente', 'Protector'];
  public birthday: Date = new Date(2020, 5, 17);
  public categoria: string = 'gato';
  public name: string = 'Gustavo';
  public nameBreed: string = 'Shiba Inu';

  @Output() myEvent = new EventEmitter();
  @Input() morePhotos: any;

  title = 'projectDirectives';
  
  constructor() { }

  ngOnInit() {
    this.myEvent.emit();
    console.log('morePhotos -->', this.morePhotos);
  }

  photo1(eve: any){
    this.srcImg = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
    this.myEvent.emit(this.srcImg);
    console.log('evento click -->', eve);
    this.nameBreed = "Shiba de Photo1"
  }

  photo2(){
    this.srcImg = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
    this.myEvent.emit(this.srcImg);
    this.nameBreed = "Inu"
  }

  showName(event: any){
    this.name = 'pedro';
    console.log('event name -->',event);
  }

}
