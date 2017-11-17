import { DatabaseService } from './services/database.service';
import { User } from './model/user';
import { CacheService } from "./services/cache.service";
import { Router } from "@angular/router";
import { SearchService } from "./services/search.service";

import { RestMovieService } from "./services/rest-movie.service";
import { Component, Provider } from "@angular/core";

import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [RestMovieService, SearchService, CacheService, DatabaseService]
})
export class AppComponent {



  constructor(private cacheService: CacheService, private router: Router, private afs: AngularFirestore, private db: DatabaseService) {}

  ngOnInit(){
        
  }
}
