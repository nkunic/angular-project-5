import { Component, Input } from '@angular/core';
import { Knjiga } from 'src/app/model/knjiga.model';
import { BibliotekaService } from 'src/app/services/biblioteka.service';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.scss'],
})
export class ClanComponent {
  @Input() id: number = 0;
  @Input() ime: string = '';
  @Input() knjiga: Knjiga;

  constructor() {
  }

  ngOnInit() {
  }

}
