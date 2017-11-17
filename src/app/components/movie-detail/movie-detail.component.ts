import { DatabaseService } from '../../services/database.service';
import { CacheService } from '../../services/cache.service';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Constant } from "../../../assets/constant";

import { RestMovieService } from "../../services/rest-movie.service";
import { Movie } from "../../model/movie";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"]
})
export class MovieDetailComponent implements OnInit {
  movie = new Movie();
  constructor(
    private restMovieService: RestMovieService,
    private route: ActivatedRoute,
    private cacheService: CacheService,
    private databaseService: DatabaseService,
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.restMovieService.getMovie(params.get("id"))
      )
      .subscribe(movie => (this.movie = movie));
  }

  addMovie(){
    console.log(this.cacheService.user.movies);
    this.cacheService.user.movies.push(this.movie);
    
    console.log("Cache user");
    console.log(this.cacheService.user);
    this.databaseService.addMovie(this.cacheService.user).catch(error => {
      console.log(error);
    });
  }
}
