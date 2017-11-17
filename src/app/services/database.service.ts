import { CacheService } from "./cache.service";
import { User } from "../model/user";
import { Movie } from "../model/movie";
import { Constant } from "../../assets/constant";
import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class DatabaseService {
  collectionRef = this.afs.collection("users");
  constants = new Constant();

  constructor(
    private afs: AngularFirestore,
    private cacheService: CacheService
  ) {}

  addMovie(user: User) {
    return this.collectionRef
      .doc(this.cacheService.user.username)
      .update(Object.assign({}, user));
  }

  getList(user: User) {
    return this.afs.doc(user.username).valueChanges();
  }

  addUser(user: User) {
    this.collectionRef
      .doc(this.cacheService.user.username)
      .set(Object.assign({}, user))
      .then(function(docRef) {
        console.log("Login written");
      });
  }

  addMockMovie() {
    this.collectionRef
      .doc("JP")
      .set(this.constants.mock_data)
      .then(function(docRef) {
        console.log("Document written");
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }

  ngOnInit() {}
}
