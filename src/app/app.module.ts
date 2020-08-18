import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { YoutubeService } from './youtube.service';
import { SearchBoxComponent } from './search-box/search-box.component';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    YoutubeVideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MyMaterialModule,
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
