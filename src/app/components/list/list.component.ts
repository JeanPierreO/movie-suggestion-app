import { forEach } from '@angular/router/src/utils/collection';
import { Observable } from "rxjs/Rx";
import { DatabaseService } from "../../services/database.service";
import { Movie } from "../../model/movie";
import { Router } from "@angular/router";
import { CacheService } from "../../services/cache.service";
import { Component, OnInit } from "@angular/core";
import { User } from "../../model/user";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  user?: User;

  constructor(
    private cacheService: CacheService,
    private router: Router,
    private databaseService: DatabaseService,
    private afs: AngularFirestore,
  ) {}

  ngOnInit() {
    this.databaseService.getList(this.cacheService.user).subscribe(res => {
     this.user = res as User;

     console.log(res);
    });
  }

  goToMovie(id: string) {
    let link = ["movie/" + id];

    this.router.navigate(link);
  }
}
