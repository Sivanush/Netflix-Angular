import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { MovieService } from './service/movie.service';
import { CategoryComponent } from './components/category/category.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,BannerComponent,CategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'netflix';

  movieService = inject(MovieService)
  TrendingMovie:any[] = []
  TopMovie:any[] = []
  UpcomingMovie:any[] = []
  

  ngOnInit(): void {
    this.movieService.getTrendingMovie().subscribe((res:any) => {
      console.log('////////////',res), 
      this.TrendingMovie = res.results
    });

    this.movieService.getTopMovie().subscribe((res:any) => {
      console.log('////////////',res), 
      this.TopMovie = res.results
    });


    this.movieService.getUpcomingMovie().subscribe((res:any) => {
      console.log('////////////',res), 
      this.UpcomingMovie = res.results
    });
  }
  
}
