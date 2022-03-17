import { Component, OnInit } from '@angular/core';
import { BibliotekaService } from '../../services/biblioteka.service';
import { Knjiga } from './knjiga/knjiga.model';

@Component({
  selector: 'app-knjige',
  templateUrl: './knjige.component.html',
  styleUrls: ['./knjige.component.scss'],
})
export class KnjigeComponent implements OnInit {

  public knjige: Array<Knjiga>;

  constructor(private bibliotekaService: BibliotekaService) {}

  ngOnInit() {
    this.knjige = this.bibliotekaService.knjige;
  }

}