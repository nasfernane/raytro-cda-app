import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params, Data } from '@angular/router';
import { Feedback } from '../feedback.model';
import { FeedbacksService } from '../feedbacks.service';

@Component({
  selector: 'app-feedback-container',
  templateUrl: './feedback-container.component.html',
  styleUrls: ['./feedback-container.component.scss'],
})
export class FeedbackContainerComponent implements OnInit {
  feedbacks: Array<{ type: string; content: string }>;

  constructor(
    private feedbacksService: FeedbacksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // met à jour les feedbacks depuis le resolver
  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.feedbacks = data['feedbacks'];
    });
  }
  onFeedbackAdded(feedback: Feedback) {
    this.feedbacksService.addFeedback(feedback.type, feedback.content);
  }

  getFeedbacks() {
    return this.feedbacksService.getFeedbacks();
  }
}
