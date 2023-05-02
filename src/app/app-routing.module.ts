import { ImagesComponent } from './pages/images/images.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { SimilarComponent } from './pages/similar/similar.component';
import { ShowMovieComponent } from './pages/show-movie/show-movie.component';
import { TvComponent } from './pages/tv/tv.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowTvComponent } from './pages/show-tv/show-tv.component';
import { SimilarTvComponent } from './pages/similar-tv/similar-tv.component';
import { ActorTvComponent } from './pages/actor-tv/actor-tv.component';
import { TvImagesComponent } from './pages/tv-images/tv-images.component';
import { ThrillerComponent } from './genres/thriller/thriller.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "movies",
    component: MoviesComponent,
  },
  {
    path: 'movie/:id',
    component: ShowMovieComponent,
    children: [
      {
        path: 'similar',
        component:SimilarComponent
      },
      {
        path: 'actors',
        component: ActorsComponent
      },
      {
        path: 'images',
        component: ImagesComponent
      }
    ]
  },
  {
    path: "tv",
    component: TvComponent,
  },
  {
    path: "tv/:id",
    component: ShowTvComponent,
    children: [
      {
        path: 'similarr',
        component:SimilarTvComponent
      },
      {
        path: 'actorss',
        component: ActorTvComponent
      },
      {
        path: 'imagess',
        component: TvImagesComponent
      }
    ]
  },
  {path: "categories",
    component: CategoriesComponent,
    children: [
      {
        path: 'drama/:genreId',
        component:ThrillerComponent
      }
    ]
},
  {
    path: "**",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
