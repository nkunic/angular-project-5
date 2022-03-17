import { Component, OnInit } from '@angular/core';
import { BibliotekaService } from '../../services/biblioteka.service';
import { Clan } from './clan/clan.model';

@Component({
  selector: 'app-clanovi',
  templateUrl: './clanovi.component.html',
  styleUrls: ['./clanovi.component.scss'],
})
export class ClanoviComponent implements OnInit {

  public clanovi: Array<Clan>;
  
  constructor(private bibliotekaService: BibliotekaService) {}
  ngOnInit() {
    this.clanovi = this.bibliotekaService.clanovi;
  }
}