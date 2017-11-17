import { Movie } from '../model/movie';
import { User } from '../model/user';
import { Injectable } from '@angular/core';
import * as firebase from "firebase/app";

@Injectable()
export class CacheService {
  user?: User;
  
  constructor() { 
     this.init();
  }



  init(){
    this.user = new User();
    this.user.username = "";
    this.user.password = "";
    this.user.movies = new Array<Movie>();
  }

}
