import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
})
export class ArchiveComponent implements OnInit {
  date: String;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // récupère la date voulue dans les paramètres
    this.date = this.route.snapshot.params['date'];
    // observe les modifs aux params pour mettre à jour automatiquement
    this.route.params.subscribe((params: Params) => {
      this.date = params['date'];
    });
  }
}
