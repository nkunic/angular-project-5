import { Component, OnInit } from '@angular/core';
import { Clan } from '../../model/clan.model';
import { BibliotekaService } from '../../services/biblioteka.service';

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
