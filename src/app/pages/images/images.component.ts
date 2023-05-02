import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {

  images: any[] = []
  video : any[]=[]
  constructor(private movieService: MovieService, private route: ActivatedRoute, private senitizer :  DomSanitizer) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      console.log('param', params.id)
      this.getImages(params.id)
      this.getVideos(params.id)
    })

  }

  getImages(id: number) {
    this.movieService.getImage(id).subscribe(({backdrops}: any) => {
      this.images = backdrops
      console.log('images', backdrops)
    })
  }

  getVideos(id: number) {
    this.movieService.getVideo(id).subscribe(({results}: any) => {
      this.video = results
    })
  }

  safeUrl(url : string){
    return this.senitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${url}`)
  }
}
