import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-feedback-new-form',
  templateUrl: './feedback-new-form.component.html',
})
export class FeedbackNewFormComponent implements OnInit {
  @Output() feedbackAdded = new EventEmitter<{
    type: string;
    content: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onAddNewLike(likeInput: HTMLInputElement) {
    this.feedbackAdded.emit({
      type: 'like',
      content: likeInput.value,
    });
  }

  onAddNewDislike(dislikeInput: HTMLInputElement) {
    this.feedbackAdded.emit({
      type: 'dislike',
      content: dislikeInput.value,
    });
  }
}
