import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './shared/character/character.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, CharacterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
