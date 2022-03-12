import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.scss'],
})
export class ClanComponent {
  @Input() id: number = 0;
  @Input() ime: string = '';
  @Input() knjiga: any;
}
