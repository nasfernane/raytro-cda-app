import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { FeedbacksService } from '../feedbacks/feedbacks.service';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
})
export class ArchivesComponent implements OnInit {
  archive: { date: string };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private feedbacksService: FeedbacksService
  ) {}

  ngOnInit(): void {
    this.archive = {
      date: this.route.snapshot.params['date'],
    };

    // met à jour automatiquement au changement d'url si le composant a déjà été instancié
    this.route.params.subscribe((params: Params) => {
      this.archive.date = params['date'];
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

  // récupère la date dans le bon format et redirige le routeur
  getArchive(date) {
    const dateSlug: string = `${date.value.slice(6, 8)}-${date.value.slice(
      0,
      4
    )}`;

    this.router.navigate(['/archives', dateSlug]);

    this.feedbacksService.fetchArchive(dateSlug);
  }
}
