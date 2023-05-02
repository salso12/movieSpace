import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  constructor(private movieService : MovieService){}

  ngOnInit(): void {
    this.getTv()
  }

  Tv : any[]=[]
  search: any = ""
  TvShows: any[]=[]

  getTv(page: number= 1) {
    this.movieService.getTv(page).subscribe(({ results }: any) => {
      this.Tv=results
      this.TvShows = this.Tv
      console.log('TV', results)
    })
  }

  paginate(event: any){
    this.getTv(event.page +1)
    this.searchTv(event.page + 1)

  }

  searchTv(query: string , page: number =1){
    if (this.search === '') {
      this.getTv()
    } else {
    this.movieService.getSearchTv(query, page).subscribe(({ results }: any) => {

      this.Tv=results
      this.TvShows = this.Tv
      console.log(results)
    })
  }
  }


}
