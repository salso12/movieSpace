import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit  {

  constructor(private movieService : MovieService){}

  ngOnInit(): void {
    this.getMovie()
  }

  movies : any[]=[]
  search: any = ""
  searchMovies: any[]=[]

  getMovie(page : number = 1) {
    this.movieService.getMovies("popular", page).subscribe(({ results }: any) => {
      this.movies=results
      this.searchMovies = this.movies
      console.log('popular', results)
    })
  }

  paginate(event: any){
    this.getMovie(event.page +1)
    this.searchMovie(event.page + 1)

  }

  searchMovie(query: string , page: number =1){
    if (this.search === '') {
      this.getMovie()
    } else {
    this.movieService.getSearch(query, page).subscribe(({ results }: any) => {

      this.movies=results
      this.searchMovies = this.movies
      console.log(results)
    })
  }
  }

}
