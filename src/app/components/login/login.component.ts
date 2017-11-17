import { ValidationService } from '../../services/validation.service';
import { AuthenticationService } from "../../services/authentication.service";
import { User } from "../../model/user";
import { Router } from "@angular/router";
import { CacheService } from "../../services/cache.service";
import { DatabaseService } from "../../services/database.service";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  user = null;
  constructor(
    private router: Router,
    private databaseService: DatabaseService,
    private cacheService: CacheService,
    private auth: AuthenticationService,
    private validation:ValidationService
  ) {}

  ngOnInit() {
    this.auth.getAuthState().subscribe(user => (this.user = user));
    this.auth.loggedIn = false;
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
    this.navigate();
  }

  login(){
    if(this.validation.checkIfEmpty(this.email) && this.validation.checkIfEmpty(this.password)){
     this.auth.login(this.email,this.password).then(success =>{
       console.log(success)
       this.navigate();
     }).catch(error => {
       console.log(error.message);
     });
    }
  }


  signup(){
    if(this.validation.checkIfEmpty(this.email) && this.validation.checkIfEmpty(this.password)){
       this.auth.signup(this.email,this.password).then(success =>{
       console.log(success)
       this.navigate();
     }).catch(error => {
       console.log(error.message);
     });
    }
    this.navigate();
    }

    navigate(){
      
        this.cacheService.user.username = this.email;
        this.cacheService.user.password = this.password;
        this.auth.loggedIn = true;
        console.log("logged in");
        console.log(this.auth.loggedIn);
        
         this.router.navigate(["/search"]);
    
    }
  
  }


