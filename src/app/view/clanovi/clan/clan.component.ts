import { Component, Input, OnInit } from '@angular/core';
import { Knjiga } from '../../knjige/knjiga/knjiga.model';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.scss'],
})
export class ClanComponent implements OnInit {
  @Input() id: number = 0;
  @Input() ime: string = '';
  @Input() knjiga: Knjiga;

  constructor() {}

  ngOnInit() {}
}
