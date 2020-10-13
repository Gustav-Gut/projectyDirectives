import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getRandomDog(param1: any) {
    let options = {
      params: param1
    };
    this.httpClient.get('https://dog.ceo/api/breeds/image/random', options).subscribe(data => {
      console.log('get random -->', data);
    });
  }

  getAllBreeds() {
    this.httpClient.get('https://dog.ceo/api/breeds/list/all').subscribe(data => {
      console.log('all dogs breed -->', data);
    });
  }

}


