import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Assign2Component } from './assign2/assign2.component';
import { FormsModule } from '@angular/forms';
import { Assign3Component } from './assign3/assign3.component';
import { Section7Component } from './section7/section7.component';
import { BasicHighlightDirective } from './section7/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './section7/better-highlight/better-highlight.directive';
import { UnlessDirective } from './section7/my-structural/unless.directive';
import { Assign5Component } from './assign5/assign5.component';
import { ActiveUsersComponent } from './assign5/active-users/active-users.component';
import { InactiveUsersComponent } from './assign5/inactive-users/inactive-users.component';
import { CounterService } from './services/counter.service';
import { TdFormsComponent } from './td-forms/td-forms.component';
import { Assign6Component } from './assign6/assign6.component';
import { HttpFirebaseComponent } from './http-firebase/http-firebase.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Assign2Component,
    Assign3Component,
    Section7Component,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    Assign5Component,
    ActiveUsersComponent,
    InactiveUsersComponent,
    TdFormsComponent,
    Assign6Component,
    HttpFirebaseComponent,
    PipesComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
