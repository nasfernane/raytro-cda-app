import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-item',
  templateUrl: './feedback-item.component.html',
  styleUrls: ['./feedback-item.component.scss'],
})
export class FeedbackItemComponent implements OnInit {
  @Input('feedback') feedback: { type: string; content: string };

  constructor() {}

  ngOnInit(): void {}
}
