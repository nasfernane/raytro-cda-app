import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss'],
})
export class ArchivesComponent implements OnInit {
  archive: { date: string };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.archive = {
      date: this.route.snapshot.params['date'],
    };

    // met à jour automatiquement au changement d'url si le composant a déjà été instancié
    this.route.params.subscribe((params: Params) => {
      this.archive.date = params['date'];
    });
  }

  // récupère la date dans le bon format et redirige le routeur
  getArchive(date) {
    const dateSlug: string = `${date.value.slice(6, 8)}-${date.value.slice(
      0,
      4
    )}`;
    this.router.navigate(['/archives', dateSlug]);
  }
}
