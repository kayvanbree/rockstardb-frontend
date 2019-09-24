import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {HomePageComponent} from './pages/home/home-page.component';
import {SpotifyGuard} from './guards/spotify.guard';
import {ArtistsPageComponent} from './pages/artists/artists-page.component';
import {TracksPageComponent} from './pages/tracks/tracks-page.component';
import {SpotifyRedirectGuard} from './guards/spotify-redirect.guard';
import {RedirectPageComponent} from './pages/redirect/redirect-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'artists', component: ArtistsPageComponent, canActivate: [SpotifyGuard] },
  { path: 'tracks', component: TracksPageComponent, canActivate: [SpotifyGuard] },
  { path: 'spotify-redirect', component: RedirectPageComponent, canActivate: [SpotifyRedirectGuard] },
  { path: '**', component: HomePageComponent, canActivate: [ SpotifyGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
