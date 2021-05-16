import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeedbackContainerComponent } from './feedbacks/feedback-container/feedback-container.component';
import { FeedbackItemComponent } from './feedbacks/feedback-item/feedback-item.component';
import { FeedbackNewFormComponent } from './feedbacks/feedback-new-form/feedback-new-form.component';
import { FeedbackNewItemComponent } from './feedbacks/feedback-new-item/feedback-new-item.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { SignupFormComponent } from './auth/signup-form/signup-form.component';
import { ArchivesComponent } from './archives/archives.component';
import { ArchiveComponent } from './archives/archive/archive.component';
import { FeedbacksService } from './feedbacks/feedbacks.service';
import { FeedbacksContainerResolver } from './feedbacks/feedback-container/feedbacks-container-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedbackContainerComponent,
    FeedbackItemComponent,
    FeedbackNewFormComponent,
    FeedbackNewItemComponent,
    LoginFormComponent,
    SignupFormComponent,
    ArchivesComponent,
    ArchiveComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    AuthService,
    AuthGuard,
    FeedbacksService,
    FeedbacksContainerResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
