import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { Feedback } from '../feedback.model';
import { FeedbacksService } from '../feedbacks.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-feedback-container',
  templateUrl: './feedback-container.component.html',
})
export class FeedbackContainerComponent implements OnInit {
  feedbacks: Array<{ category: string; content: string }>;
  loadedFeedbacks = [];

  constructor(
    private feedbacksService: FeedbacksService,
    private http: HttpClient
  ) {}

  // met à jour les feedbacks depuis le resolver
  ngOnInit(): void {
    this.fetchCurrentWeek();
  }

  fetchCurrentWeek() {
    this.http
      .get<{
        data: {
          data: Array<{
            key: {
              createdAt: string;
              _id: string;
              category: string;
              content: string;
            };
          }>;
          status: string;
        };
      }>('https://raytro-cda-api.herokuapp.com/api/feedbacks/currentweek')
      .pipe(
        map((responseData) => {
          const feedbacksArray = [];
          //   console.log(responseData.data.data);
          for (const key in responseData.data.data) {
            feedbacksArray.push(responseData.data.data[key]);
          }
          return feedbacksArray;
        })
      )
      .subscribe((data) => {
        this.loadedFeedbacks = data;
      });
  }
}
