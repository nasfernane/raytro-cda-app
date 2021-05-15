import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  }

  // calcule la semaine et l'année d'une date et renvoie en string sous format 'SS-YYYY'
  calcWeek(date: Date) {
    date = new Date(date);
    // copie la date pour ne pas modifier l'originale
    date = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );

    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
    // Récupère le premier jour de l'année
    const yearStart: Date = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));

    // Calcule le numéro de semaine
    const weekNumber: number = Math.ceil(
      ((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
    );

    // return 'coucou';
    return `${weekNumber}-${date.getFullYear()}`;
  }

  // récupère la date dans le bon format et redirige le routeur
  getArchive(date) {
    const archiveDate: string = this.calcWeek(date.value);
    this.router.navigate([`/archives/${archiveDate}`]);
  }
}
