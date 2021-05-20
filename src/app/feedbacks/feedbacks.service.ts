import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// l'opérateur map enveloppe des données dans un observable
import { map } from 'rxjs/operators';
import { Feedback } from './feedback.model';

@Injectable()
export class FeedbacksService {
  constructor(private http: HttpClient) {}

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
