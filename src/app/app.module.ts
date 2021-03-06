import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

import { HeaderComponent } from './header/header.component';
import { FeedbackContainerComponent } from './feedbacks/feedback-container/feedback-container.component';
import { FeedbackItemComponent } from './feedbacks/feedback-item/feedback-item.component';
import { FeedbackNewFormComponent } from './feedbacks/feedback-new-form/feedback-new-form.component';
import { FeedbackNewItemComponent } from './feedbacks/feedback-new-item/feedback-new-item.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { SignupFormComponent } from './auth/signup-form/signup-form.component';
import { ArchivesComponent } from './archives/archives.component';
import { FeedbacksService } from './feedbacks/feedbacks.service';
import { HttpRequestInterceptor } from './http.interceptor';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
    AuthService,
    AuthGuard,
    FeedbacksService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
