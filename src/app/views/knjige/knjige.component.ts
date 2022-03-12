import { Component, OnInit } from '@angular/core';
import { Knjiga } from '../../model/knjiga.model';
import { BibliotekaService } from '../../services/biblioteka.service';

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
