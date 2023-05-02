import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-show-tv',
  templateUrl: './show-tv.component.html',
  styleUrls: ['./show-tv.component.css']
})
export class ShowTvComponent implements OnInit{

  movie: any = {}


  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.params.subscribe((params: any) => {
      this.getOneMovie(params.id)
    })

  }

  getOneMovie(id: number) {
    this.movieService.getTvv(id).subscribe((response: any) => {
      this.movie = response
      console.log(this.movie)
    })
  }
}
