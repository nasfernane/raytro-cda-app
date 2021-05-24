import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FeedbacksService } from '../feedbacks/feedbacks.service';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
})
export class ArchivesComponent implements OnInit {
  loadedFeedbacks = [];
  isFetching = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private feedbacksService: FeedbacksService
  ) {}

  ngOnInit(): void {
    // met à jour automatiquement au changement d'url si le composant a déjà été instancié
    this.route.params.subscribe((params: Params) => {
      this.isFetching = true;
      this.feedbacksService
        .fetchArchive(params['date'])
        .subscribe((feedbacks) => {
          this.isFetching = false;
          this.loadedFeedbacks = feedbacks;
        });
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

  // récupère le fetch des archives selon la semaine choisie par l'utilisateur, via le service
  onFetchArchive(date: string) {
    this.isFetching = true;
    this.feedbacksService.fetchArchive(date).subscribe((feedbacks) => {
      this.isFetching = false;
      this.loadedFeedbacks = feedbacks;
    });
  }
}
