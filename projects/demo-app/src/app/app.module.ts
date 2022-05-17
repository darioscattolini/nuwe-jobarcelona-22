import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JobxUiModule } from 'jobx-ui';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JobxUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
