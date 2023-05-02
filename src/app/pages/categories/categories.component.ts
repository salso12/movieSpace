import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  genres: any[]=[]
  genre: any;
  sidebarVisible : boolean = false


  constructor(private movieService: MovieService,private router: Router) {}

  ngOnInit() {
    this.getAllGenres()
    this.getMovie()
    // this.getOneGenre

  }
  movies : any[]=[]
  searchMovies: any[]=[]
  showRouterOutlet = false;

  show(){
    this.showRouterOutlet = !this.showRouterOutlet
  }

  getMovie(page : number = 1) {
    this.movieService.getMovies("popular", page).subscribe(({ results }: any) => {
      this.movies=results
      this.searchMovies = this.movies
      console.log('popular', results)
    })
  }
  getAllGenres() {
    this.movieService.getGenre().subscribe((response: any) => {
      this.genres = response.genres;
      console.log(response)
    });

  }


}
