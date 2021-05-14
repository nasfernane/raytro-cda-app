import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { SignupFormComponent } from './auth/signup-form/signup-form.component';
import { FeedbackContainerComponent } from './feedbacks/feedback-container/feedback-container.component';

const routes: Routes = [
  { path: '', component: FeedbackContainerComponent },
  { path: 'feedbacks', component: FeedbackContainerComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignupFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
