import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {

  Actors: any[] = []
  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      console.log('param', params.id)
      this.getActors(params.id)
    })

  }

  getActors(id: number) {
    this.movieService.getActor(id).subscribe(({cast}: any) => {
      this.Actors = cast
      console.log('actor', cast)
    })
  }

}
