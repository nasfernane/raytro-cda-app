import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { FeedbacksService } from '../feedbacks.service';

interface Feedback {
  type: string;
  content: string;
}

interface Feedbacks extends Array<Feedback> {}

@Injectable()
export class FeedbacksContainerResolver implements Resolve<Feedbacks> {
  constructor(private feedbacksService: FeedbacksService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Feedbacks> | Promise<Feedbacks> | Feedbacks {
    console.log(this.feedbacksService.getFeedbacks());
    return this.feedbacksService.getFeedbacks();
  }
}
