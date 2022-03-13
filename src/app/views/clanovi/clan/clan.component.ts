import { Component, Input, OnInit } from '@angular/core';
import { BibliotekaService } from '../../../services/biblioteka.service';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.scss'],
})
export class ClanComponent implements OnInit {
  @Input() id: number = 0;
  @Input() ime: string = '';
  @Input() knjiga: any;

  public detaljnije = false;

  constructor(private bibliotekaService: BibliotekaService) {}

  ngOnInit() {}

  public prikaziDetaljnije() {
    this.detaljnije = !this.detaljnije;
  }
}
