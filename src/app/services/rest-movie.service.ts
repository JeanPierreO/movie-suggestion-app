import { Constant } from '../../assets/constant';
import { Movie } from "../model/movie";
import { Observable } from "rxjs/Rx";

import { Injectable } from "@angular/core";
import { Http, RequestOptions, URLSearchParams } from "@angular/http";
import { HttpHeaders } from "@angular/common/http";
import { Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class RestMovieService {
  apiKey: string;
  hostUrl: string;
  imagesUrl: string;
  lang: string;
  posterPath: string;
  movie = new Movie();
  constants = new Constant();
  constructor(private http: Http) {

  }


  populateRequestOptions(): RequestOptions {
    const requestOptions = new RequestOptions();
    requestOptions.params = new URLSearchParams();
    requestOptions.params.append("api_key", this.constants.apiKey);


    return requestOptions;
    
  }
  getMovie(movieId: string): Observable<Movie> {
    return this.http
      .get(this.constants.hostUrl + "/3/movie/" + movieId, this.populateRequestOptions())
      .map(response =>  response.json() as Movie)
      .map(movie => {
        movie.poster_path = this.constants.imagesUrl + movie.poster_path
        return movie;
      })
      
  }
}
