import { AuthGuard } from '../components/auth-guard';
import { LoginComponent } from '../components/login/login.component';
import { ListComponent } from '../components/list/list.component';
import { MovieDetailComponent } from "../components/movie-detail/movie-detail.component";
import { SearchComponent } from "../components/search/search.component";
import { CanActivate, RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

export const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "movie/:id", component: MovieDetailComponent, canActivate: [AuthGuard]},
  { path: "search", component: SearchComponent, canActivate: [AuthGuard] },
  { path: "list", component: ListComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
