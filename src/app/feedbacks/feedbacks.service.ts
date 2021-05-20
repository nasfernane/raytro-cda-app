import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FeedbacksService {
  constructor(private http: HttpClient) {}
  private feedbacks = [
    { type: 'like', content: 'blabladodo' },
    { type: 'dislike', content: 'sdgsgdsdgs' },
    { type: 'dislike', content: 'coucoucougsgdsg' },
  ];

  getFeedbacks() {
    return this.feedbacks;
  }

  // récupère les feedbacks de la semaine en cours
  fetchCurrentWeek() {
    this.http
      .get('https://raytro-cda-api.herokuapp.com/api/feedbacks/currentweek')
      .subscribe((data) => {
        console.log(data);
      });
  }

  // récupère les feedbacks d'une semaine archivée
  fetchArchive(date: string) {
    this.http
      .get(`https://raytro-cda-api.herokuapp.com/api/feedbacks/week/${date}`)
      .subscribe((data) => {
        console.log(data);
      });
  }

  // ajoute un nouveau feedback en lui donnant la catégorie et le contenu
  newFeedback(feedback: { category: string; content: string }) {
    this.http
      .post(
        'https://raytro-cda-api.herokuapp.com/api/feedbacks/create',
        feedback
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
