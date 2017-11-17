import { Result } from '../model/results';

import { Constant } from "../../assets/constant";
import { Movie } from "../model/movie";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class SearchService {
  constants = new Constant();
  movie =  new Movie();

  constructor(private http: Http) {}

  //https://api.themoviedb.org/3/search/movie?api_key=988bd12d972562dde5eb4c43d71c56e0&language=en-US&query=Fight&page=1&include_adult=false



  search(terms: Observable<string>){
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }
  searchEntries(term): Observable<Result> {
    console.log("I'm running tooooo");
    console.log("Term I'm searching " + term);
    return this.http
      .get(this.constants.hostUrl +"/3/search/movie?api_key=" +this.constants.apiKey +"&" +this.constants.lang +"&query=" + term)
      .map(response => response.json() as  Result)
  }
}
