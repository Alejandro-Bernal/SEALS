import { Component, OnInit } from '@angular/core';
// forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Use a service
import { ApiDataService } from '../Shared/Sevices/api-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  public movieList = [];
  public movie = '';
  public inputGroup: FormGroup;

  constructor(public _apiService: ApiDataService, public fb: FormBuilder) { }

  ngOnInit() {
    this.listenForMovieData();
    // Subscribe
    this._apiService.listOfMoviesObs
      .subscribe((data) => {
        this.movieList = data;
      })
    this.initForm();
  }

  listenForMovieData() {
    this._apiService.getAllMovies();
  }

  initForm() {
    this.inputGroup = this.fb.group({
      id: [null, Validators.required]
    })
  }

  onFormSubmit() {
    this._apiService.pullOneMovie(this.inputGroup.value)
      .subscribe((data: any) => {
        console.log(data);
      })
  }
}
