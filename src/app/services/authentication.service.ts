import { CacheService } from "./cache.service";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthenticationService {
  private authState: Observable<firebase.User>;
  private currentUser: firebase.User = null;
  public loggedIn: boolean = false;
  constructor(public afAuth: AngularFireAuth) {
    this.authState = this.afAuth.authState;
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.currentUser = user;
        this.loggedIn = true;
      } else {
         this.loggedIn = false;
         this.currentUser = null;
      }
    });
  }

  public getAuthState() {
    return this.authState;
  }

  getLoggedIn() {
    return this.loggedIn;
  }
  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
