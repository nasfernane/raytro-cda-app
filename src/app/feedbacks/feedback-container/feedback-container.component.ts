import { Component, OnInit } from '@angular/core';
import { FeedbacksService } from '../feedbacks.service';

@Component({
  selector: 'app-feedback-container',
  templateUrl: './feedback-container.component.html',
})
export class FeedbackContainerComponent implements OnInit {
  feedbacks: Array<{ category: string; content: string }>;
  isFetching = false;
  loadedFeedbacks = [];

  constructor(private feedbacksService: FeedbacksService) {}

  // met à jour les feedbacks depuis le resolver
  ngOnInit(): void {
    this.isFetching = true;
    this.feedbacksService.fetchCurrentWeek().subscribe((feedbacks) => {
      this.isFetching = false;
      this.loadedFeedbacks = feedbacks;
    });
  }

  // fetch la semaine courante via le service
  onFetchCurrentWeek() {
    this.isFetching = true;
    this.feedbacksService.fetchCurrentWeek().subscribe((feedbacks) => {
      this.isFetching = false;
      this.loadedFeedbacks = feedbacks;
    });
  }
}
