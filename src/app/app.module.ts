import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SlidersComponent } from './sliders/sliders.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'slider', component: SlidersComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SlidersComponent,
    GalleryComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
