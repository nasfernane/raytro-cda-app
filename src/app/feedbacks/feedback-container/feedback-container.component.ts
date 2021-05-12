import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
