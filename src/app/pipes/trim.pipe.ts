import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: any, param1: boolean, param2: boolean, param3: string): any {
    let trimed: any = value.replace(" ", "").trim();
    console.log('arguments pipe trim --> ',param1)
    return trimed;
  }

}
