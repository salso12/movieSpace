import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-similar-tv',
  templateUrl: './similar-tv.component.html',
  styleUrls: ['./similar-tv.component.css']
})
export class SimilarTvComponent implements OnInit {

  similarTv: any[] = []

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      console.log('param', params.id)
      this.getSimilarTv(params.id)
    })

  }

  getSimilarTv(id: number) {
    this.movieService.getSimilarTv(id).subscribe(({results}: any) => {
      this.similarTv = results
      console.log('similar', results)
    })
  }


}
