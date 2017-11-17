import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  constructor() { }

  checkIfString(input: string){
    return input.match(/^[A-z]+$/);
  }

  checkIfEmpty(input:string){
    return (input.length > 0);
  }

}
