import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
//import { routing } from './app.routing'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { KnjigeComponent } from './view/knjige/knjige.component';
import { KnjigaComponent } from './view/knjige/knjiga/knjiga.component';
import { ClanoviComponent } from './view/clanovi/clanovi.component';
import { ClanComponent } from './view/clanovi/clan/clan.component';

import { BibliotekaService } from './services/biblioteka.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    RouterModule,
    //routing,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    KnjigeComponent,
    KnjigaComponent,
    ClanoviComponent,
    ClanComponent,
  ],
  providers: [BibliotekaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
