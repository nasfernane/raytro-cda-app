import { Component, Injectable, OnInit, ViewChild } from '@angular/core';

import { FeedbacksService } from '../feedbacks.service';

@Component({
  selector: 'app-feedback-new-form',
  templateUrl: './feedback-new-form.component.html',
})
@Injectable()
export class FeedbackNewFormComponent implements OnInit {
  @ViewChild('likeform') likeForm;
  @ViewChild('dislikeform') dislikeForm;
  formData: { category: string; content: string };

  constructor(private feedbacksService: FeedbacksService) {}

  ngOnInit(): void {}

  onNewFeedback(content: string, type: string) {
    this.formData = {
      category: type,
      content: content,
    };

    this.feedbacksService.newFeedback(this.formData);

    if (this.formData.category === 'like') {
      this.likeForm.resetForm();
    } else {
      this.dislikeForm.resetForm();
    }
  }
}
