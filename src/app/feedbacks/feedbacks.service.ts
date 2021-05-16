export class FeedbacksService {
  private feedbacks = [
    { type: 'like', content: 'blabladodo' },
    { type: 'dislike', content: 'sdgsgdsdgs' },
    { type: 'dislike', content: 'coucoucougsgdsg' },
  ];

  getFeedbacks() {
    return this.feedbacks;
  }

  addFeedback(type, content) {
    this.feedbacks.push({ type: type, content: content });
  }
}
