import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadShowComponent } from './upload-show/upload-show.component';

import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
    AppComponent,
    UploadShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDropzoneModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
