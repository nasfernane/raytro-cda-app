import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// l'opérateur map enveloppe des données dans un observable
import { map } from 'rxjs/operators';
import { Feedback } from './feedback.model';

@Injectable()
export class FeedbacksService {
  constructor(private http: HttpClient) {}

  // ajoute un nouveau feedback à la bdd
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

  // fetch les feedbacks de la semaine en cours
  fetchCurrentWeek() {
    return this.http
      .get<{
        data: {
          data: Array<{
            key: {
              createdAt: string;
              _id: string;
              category: string;
              content: string;
            };
          }>;
          status: string;
        };
      }>('https://raytro-cda-api.herokuapp.com/api/feedbacks/currentweek')
      .pipe(
        map((responseData) => {
          const feedbacksArray = [];
          //   console.log(responseData.data.data);
          for (const key in responseData.data.data) {
            feedbacksArray.push(responseData.data.data[key]);
          }
          return feedbacksArray;
        })
      );
  }

  // fetch les feedbacks d'une semaine choisie par l'utilisateur
  fetchArchive(date: string) {
    return this.http
      .get<{
        data: {
          data: Array<{
            key: {
              createdAt: string;
              _id: string;
              category: string;
              content: string;
            };
          }>;
          status: string;
        };
      }>(`https://raytro-cda-api.herokuapp.com/api/feedbacks/week/${date}`)
      .pipe(
        map((responseData) => {
          const feedbacksArray = [];
          for (const key in responseData.data.data) {
            feedbacksArray.push(responseData.data.data[key]);
          }
          return feedbacksArray;
        })
      );
  }
}
