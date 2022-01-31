import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { NewsFeedPanelComponent } from './news-feed-panel/news-feed-panel.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { HeaderBarComponent } from './Header/header-bar/header-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    NewsFeedPanelComponent,
    TaskListComponent,
    ResourceListComponent,
    NotesListComponent,
    HeaderBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
