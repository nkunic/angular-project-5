import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { HomepageComponent } from './view/homepage/homepage.component';

import { KnjigeComponent } from './view/knjige/knjige.component';
import { KnjigaComponent } from './view/knjige/knjiga/knjiga.component';

import { ClanoviComponent } from './view/clanovi/clanovi.component';
import { ClanComponent } from './view/clanovi/clan/clan.component';

import { BibliotekaService } from './services/biblioteka.service';

@NgModule({
  imports: [BrowserModule, FormsModule, SharedModule],
  declarations: [
    AppComponent,
    HomepageComponent,
    KnjigeComponent,
    KnjigaComponent,
    ClanoviComponent,
    ClanComponent,
  ],
  providers: [BibliotekaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
