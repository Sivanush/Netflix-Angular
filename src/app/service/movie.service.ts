import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { tmdbConfig } from '../constants/config';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  http = inject(HttpClient)

  getTrendingMovie(): any {
    return this.http.get('https://api.themoviedb.org/3/movie/popular', {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + tmdbConfig.accesstoken
      }
    })
  }
  getTopMovie(): any {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated', {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + tmdbConfig.accesstoken
      }
    })
  }

  getUpcomingMovie(): any {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + tmdbConfig.accesstoken
      }
    })
  }


}
