import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MemeComponent } from './components/meme/meme.component';
import { HtmlImageComponent } from './components/html-image/html-image.component';
@NgModule({
  declarations: [
    AppComponent,
    MemeComponent,
    HtmlImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
