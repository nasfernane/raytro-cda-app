import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeedbackContainerComponent } from './feedbacks/feedback-container/feedback-container.component';
import { FeedbackItemComponent } from './feedbacks/feedback-item/feedback-item.component';
import { FeedbackNewFormComponent } from './feedbacks/feedback-new-form/feedback-new-form.component';
import { FeedbackNewItemComponent } from './feedbacks/feedback-new-item/feedback-new-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedbackContainerComponent,
    FeedbackItemComponent,
    FeedbackNewFormComponent,
    FeedbackNewItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
