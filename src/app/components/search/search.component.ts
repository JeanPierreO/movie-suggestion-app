import { CacheService } from '../../services/cache.service';
import { Result } from '../../model/results';
import { SearchService } from "../../services/search.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import { Movie } from "../../model/movie";
// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {



  results: Movie[];
  searchTerms = new Subject<string>();
  constructor(private searchService: SearchService, private router: Router, private cacheService:CacheService) {
    this.searchService.search(this.searchTerms).subscribe(response => {
      this.results = response.results;
      console.log(this.results);
    });
  }

  ngOnInit(): void {
    console.log(this.cacheService.user);
  }

   goToDetail(movie: Movie): void {
     console.log(movie.id)
    let link = ['/movie', movie.id];
    this.router.navigate(link);
  }
}
