import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { NewsFeedPanelComponent } from './news-feed-panel/news-feed-panel.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { HeaderBarComponent } from './Header/header-bar/header-bar.component';
import { LoginModule } from './Header/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthServiceService } from './services/auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    NewsFeedPanelComponent,
    TaskListComponent,
    ResourceListComponent,
    NotesListComponent,
    HeaderBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoginModule,
    FormsModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
