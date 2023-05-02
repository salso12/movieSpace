import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvComponent } from './pages/tv/tv.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { CardComponent } from './components/card/card.component';
import { ShowMovieComponent } from './pages/show-movie/show-movie.component';
import { SimilarComponent } from './pages/similar/similar.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { ImagesComponent } from './pages/images/images.component'
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { ShowTvComponent } from './pages/show-tv/show-tv.component';
import { SimilarTvComponent } from './pages/similar-tv/similar-tv.component';
import { ActorTvComponent } from './pages/actor-tv/actor-tv.component';
import { TvImagesComponent } from './pages/tv-images/tv-images.component';
import { ThrillerComponent } from './genres/thriller/thriller.component';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TvComponent,
    CategoriesComponent,
    SliderComponent,
    CardComponent,
    ShowMovieComponent,
    SimilarComponent,
    ActorsComponent,
    ImagesComponent,
    ShowTvComponent,
    SimilarTvComponent,
    ActorTvComponent,
    TvImagesComponent,
    ThrillerComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PaginatorModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
