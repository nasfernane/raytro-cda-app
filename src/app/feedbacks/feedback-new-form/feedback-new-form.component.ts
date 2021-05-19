import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback-new-form',
  templateUrl: './feedback-new-form.component.html',
})
export class FeedbackNewFormComponent implements OnInit {
  //   @Output() feedbackAdded = new EventEmitter<{
  //     type: string;
  //     content: string;
  //   }>();
  formData: { type: string; content: string };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onNewFeedback(content: string, type: string) {
    this.formData = {
      type: type,
      content: content,
    };

    this.http
      .post(
        'https://raytro-cda-api.herokuapp.com/api/feedbacks/create',
        this.formData
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
