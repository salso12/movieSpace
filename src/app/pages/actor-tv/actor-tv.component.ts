import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-actor-tv',
  templateUrl: './actor-tv.component.html',
  styleUrls: ['./actor-tv.component.css']
})
export class ActorTvComponent implements OnInit {

  Actors: any[] = []
  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      console.log('param', params.id)
      this.getActors(params.id)
    })

  }

  getActors(id: number) {
    this.movieService.getActorTv(id).subscribe(({cast}: any) => {
      this.Actors = cast
      console.log('actor', cast)
    })
  }

}
