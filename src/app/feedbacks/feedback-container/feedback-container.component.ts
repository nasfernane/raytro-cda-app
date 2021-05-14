import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback.model';

@Component({
  selector: 'app-feedback-container',
  templateUrl: './feedback-container.component.html',
  styleUrls: ['./feedback-container.component.scss'],
})
export class FeedbackContainerComponent implements OnInit {
  feedbacks = [
    { type: 'like', content: 'blabladodo' },
    { type: 'dislike', content: 'sdgsgdsdgs' },
    { type: 'dislike', content: 'coucoucougsgdsg' },
  ];

  onFeedbackAdded(feedback: Feedback) {
    this.feedbacks.push({
      type: feedback.type,
      content: feedback.content,
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
