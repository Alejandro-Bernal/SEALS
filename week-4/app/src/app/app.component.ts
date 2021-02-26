import { Component, OnInit } from '@angular/core';
// Use a service
import { ApiDataService } from '../Shared/Sevices/api-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public _apiService: ApiDataService) { }

  ngOnInit() {
    this.listenForMovieData();
  }

  listenForMovieData() {
    this._apiService.getAllMovies();
  }
}
