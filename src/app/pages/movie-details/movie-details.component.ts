import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  constructor(private service: MovieApiServiceService, private router: ActivatedRoute) {
  }
  getMovieDetailResult: any
  getMovieVideoResult: any
  getMoviecastResult: any
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id')
    this.getMovie(getParamId)
    this.getVideo(getParamId)
    this.getMovieCast(getParamId)
  }

  getMovie(id: any) {
    this.service.getMovieDetaisl(id).subscribe((result) => {
      this.getMovieDetailResult = result;
    })
  }
  getVideo(id: any) {
    this.service.getMovievideo(id).subscribe((result) => {
      console.log(result, 'getMovieVideo#');
      result.results.forEach((element: any) => {
        if (element.type == "Trailer") {
          this.getMovieVideoResult = element.key;
        }
      });

    });
  }
  getMovieCast(id: any) {
    this.service.getMovieCast(id).subscribe((result) => {
      this.getMoviecastResult = result.cast;
    })
  }
}
