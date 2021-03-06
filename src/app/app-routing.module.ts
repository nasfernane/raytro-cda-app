import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { SignupFormComponent } from './auth/signup-form/signup-form.component';
import { FeedbackContainerComponent } from './feedbacks/feedback-container/feedback-container.component';
import { ArchivesComponent } from './archives/archives.component';
import { FeedbackNewFormComponent } from './feedbacks/feedback-new-form/feedback-new-form.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: '', component: FeedbackContainerComponent },
  {
    path: 'feedbacks',
    component: FeedbackContainerComponent,
  },
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'archives', component: ArchivesComponent },
  { path: 'contribute', component: FeedbackNewFormComponent },
  { path: 'archives/:date', component: ArchivesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
