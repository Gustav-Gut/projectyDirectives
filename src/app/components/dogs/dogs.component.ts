import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  constructor(
    private dogsService: DogsService
  ) { }

  ngOnInit() {
    this.dogsService.getRandomDog("param1");
    this.dogsService.getAllBreeds();
  }

}
