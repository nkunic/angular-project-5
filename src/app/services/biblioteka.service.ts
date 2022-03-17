import { Injectable } from '@angular/core';
import { Clan } from '../view/clanovi/clan/clan.model';
import { Knjiga } from '../view/knjige/knjiga/knjiga.model';

@Injectable()
export class BibliotekaService {
  public knjige: Array<Knjiga> = [
    {
      id: 0,
      autor: 'Haled Hoseini',
      naslov: 'Hiljadu čudesnih sunaca',
    },
    {
      id: 1,
      autor: 'Džodi Pikol',
      naslov: 'Čuvar svoje sestre',
    },
    {
      id: 2,
      autor: 'J.K.Rouling',
      naslov: 'Hari Poter i Red Feniksa',
    },
  ];

  public clanovi: Array<Clan> = [
    {
      id: 0,
      ime: 'Sabina Ćatović',
      knjiga: this.knjige[0],
    },
    {
      id: 1,
      ime: 'Sonja Rajić',
      knjiga: this.knjige[1],
    },
    {
      id: 2,
      ime: 'Marko Bogdanović',
      knjiga: this.knjige[2],
    },
  ];

  constructor() {}
}
