import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl: string = "https://api.themoviedb.org/3"
  apiKey: string = "35cdda3651430d0dd4f856bd7df11a21"


  constructor(private http: HttpClient) { }

  getMovies(option: string, page: number =1) {
    return this.http.get(`${this.baseUrl}/movie/${option}?page=${page}&api_key=${this.apiKey}`)
  }

  getSimilarMovies(id: number) {
    return this.http.get(`${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`)
  }

  getMovie(id: number) {
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`)
  }

  getActor(id: number) {
    return this.http.get(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`)
  }
  getActorTv(id: number) {
    return this.http.get(`${this.baseUrl}/tv/${id}/credits?api_key=${this.apiKey}`)
  }

  getImage(id: number) {
    return this.http.get(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`)
  }

  getVideo(id: number) {
    return this.http.get(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
  }

  getImageTv(id: number) {
    return this.http.get(`${this.baseUrl}/tv/${id}/images?api_key=${this.apiKey}`)
  }

  getVideoTv(id: number) {
    return this.http.get(`${this.baseUrl}/tv/${id}/videos?api_key=${this.apiKey}`)
  }
  getSearch(query: string, page: number =1){
    return this.http.get(`${this.baseUrl}/search/movie?page=${page}&api_key=${this.apiKey}&query=${query}`)
  }
  getTv(page: number =1){
    return this.http.get(`${this.baseUrl}/tv/popular?page=${page}&api_key=${this.apiKey}`)
  }
  getSearchTv(query: string, page: number =1){
    return this.http.get(`${this.baseUrl}/search/tv?page=${page}&api_key=${this.apiKey}&query=${query}`)
  }
  getTvv(id: number) {
    return this.http.get(`${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`)
  }
  getSimilarTv(id: number) {
    return this.http.get(`${this.baseUrl}/tv/${id}/similar?api_key=${this.apiKey}`)
  }
  getGenre(){
    return this.http.get(`${this.baseUrl}/genre/movie/list?api_key=debbfd06917a6e115bc3f6c4e45f000c`)
  }
  getMoviByGenres(genreId: number){
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=debbfd06917a6e115bc3f6c4e45f000c&with_genres=${genreId}`)
  }
  getTvByGenreId(genreId: number, page: number = 1){
    return this.http.get(`${this.baseUrl}/discover/tv?page=${page}&api_key=debbfd06917a6e115bc3f6c4e45f000c&with_genres=${genreId}`)
  }
}
