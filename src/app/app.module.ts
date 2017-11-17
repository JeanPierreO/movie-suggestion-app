import { AuthGuard } from './components/auth-guard';
import { ValidationService } from './services/validation.service';
import { AuthenticationService } from './services/authentication.service';
import { FormsModule } from '@angular/forms';
import { Constant } from '../assets/constant';
import { DatabaseService } from './services/database.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AppRoutingModule } from "./routing/routing.module";
import { Router, RouterModule } from "@angular/router";
import { SearchService } from "./services/search.service";
import { RestMovieService } from "./services/rest-movie.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { MovieDetailComponent } from "./components/movie-detail/movie-detail.component";
import { ListComponent } from "./components/list/list.component";
import { SearchComponent } from "./components/search/search.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { SafePipe } from "./services/safe.pipe";
import { AngularFireModule } from "angularfire2";
import { LoginComponent } from './components/login/login.component';
import { AngularFireAuth } from "angularfire2/auth";

  var firebaseconfig = {
    apiKey: "AIzaSyAt-vNlVQLcAVaI-pNp9IcXjvc11OE_SyM",
    authDomain: "movie-suggestion-app-8de1d.firebaseapp.com",
    databaseURL: "https://movie-suggestion-app-8de1d.firebaseio.com",
    projectId: "movie-suggestion-app-8de1d",
    storageBucket: "",
    messagingSenderId: "882347237411"
  };

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    ListComponent,
    SearchComponent,
    NavigationComponent,
    SafePipe,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseconfig),
    FormsModule,
  ],
  providers: [RestMovieService, SearchService, DatabaseService,AuthenticationService, AngularFireAuth,ValidationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
