import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainProfileComponent } from './components/main-profile/main-profile.component';
import { InfoTabComponent } from './components/info-tab/info-tab.component';
import { TecComponent } from './components/tec/tec.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    MainProfileComponent,
    InfoTabComponent,
    TecComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
