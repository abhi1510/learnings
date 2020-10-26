import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    UnlessDirective
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
