import { Component, Input, OnInit } from '@angular/core';
import { BibliotekaService } from '../../../services/biblioteka.service';

@Component({
  selector: 'app-knjiga',
  templateUrl: './knjiga.component.html',
  styleUrls: ['./knjiga.component.scss'],
})
export class KnjigaComponent implements OnInit {
  @Input() id: number = 0;
  @Input() autor: string;
  @Input() naslov: string;

  public detaljnije = false;

  constructor(private bibliotekaService: BibliotekaService) {}

  ngOnInit() {}

  public prikaziDetaljnije() {
    this.detaljnije = !this.detaljnije;
  }

  public sacuvaj() {
    this.bibliotekaService.knjige[this.id].naslov = this.naslov;
    this.detaljnije = !this.detaljnije;
  }
}
