import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-thriller',
  templateUrl: './thriller.component.html',
  styleUrls: ['./thriller.component.css']
})
export class ThrillerComponent {

  movies: any[]=[];
  baseImageUrl = "https://image.tmdb.org/t/p/w300"
  genreId!: number;



  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      this.genreId = params['genreId'];
      console.log("Genre ID: ", this.genreId);
      this.getMoviesByGenre(this.genreId);
    });
  }

  getMoviesByGenre(genreId: number) {
    this.movieService.getMoviByGenres(genreId).subscribe((response: any) => {
      this.movies = response.results;
    });
  }

  resolveImage(avatar: string) {
    if(avatar) {
      return `${this.baseImageUrl}${avatar}`
    }
    return 'https://ih1.redbubble.net/image.1366149063.3617/papergc,500x,w,f8f8f8-pad,750x1000,f8f8f8.jpg'
  }
}
