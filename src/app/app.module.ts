import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BubblesComponent } from './bubbles/bubbles.component';
import { BubblesChartDirective } from './bubbles-chart.directive';

@NgModule({
  declarations: [
    AppComponent,
    BubblesComponent,
    BubblesChartDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
