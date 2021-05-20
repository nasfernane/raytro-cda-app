import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FeedbackContainerComponent } from '../feedbacks/feedback-container/feedback-container.component';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
})
export class ArchivesComponent implements OnInit {
  loadedFeedbacks = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // met à jour automatiquement au changement d'url si le composant a déjà été instancié
    this.route.params.subscribe((params: Params) => {
      this.fetchArchive(params['date']);
    });
  }

  // récupère la date dans le bon format et redirige le routeur
  pickArchive(date) {
    const dateSlug: string = `${date.value.slice(6, 8)}-${date.value.slice(
      0,
      4
    )}`;

    this.router.navigate(['/archives', dateSlug]);
  }

  fetchArchive(date: string) {
    this.http
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
      )
      .subscribe((data) => {
        this.loadedFeedbacks = data;
      });
  }

  // calcule la semaine et l'année d'une date et renvoie en string sous format 'SS-YYYY'
  //   calcWeek(date: Date) {
  //     date = new Date(date);
  //     // copie la date pour ne pas modifier l'originale
  //     date = new Date(
  //       Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  //     );

  //     date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  //     // Récupère le premier jour de l'année
  //     const yearStart: Date = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));

  //     // Calcule le numéro de semaine
  //     const weekNumber: number = Math.ceil(
  //       ((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
  //     );

  //     // return 'coucou';
  //     return `${weekNumber}-${date.getFullYear()}`;
  //   }
}
