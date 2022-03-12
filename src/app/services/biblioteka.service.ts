import { Injectable } from '@angular/core';
import { Clan } from '../model/clan.model';
import { Knjiga } from '../model/knjiga.model';

@Injectable()
export class BibliotekaService {
  public knjige: Array<Knjiga> = [
    {
      id: 1,
      autor: 'Haled Hoseini',
      naslov: 'Hiljadu čudesnih sunaca',
    },
    {
      id: 2,
      autor: 'Džodi Pikol',
      naslov: 'Čuvar svoje sestre',
    },
    {
      id: 3,
      autor: 'J.K.Rouling',
      naslov: 'Hari Poter i Red Feniksa',
    },
  ];

  public clanovi: Array<Clan> = [
    {
      id: 1,
      ime: 'Sabina Ćatović',
      knjiga: this.knjige[0],
    },
    {
      id: 2,
      ime: 'Sonja Rajić',
      knjiga: this.knjige[1],
    },
    {
      id: 3,
      ime: 'Marko Bogdanović',
      knjiga: this.knjige[2],
    },
  ];

  constructor() {}
}
