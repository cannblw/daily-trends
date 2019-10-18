import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './pages/news/news.component';
import { HeaderComponent } from './pages/layout/header/header.component';
import { FeedService } from './services/feed.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FeedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
