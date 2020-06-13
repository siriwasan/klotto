import { Component } from '@angular/core';

import { Ticket } from '../../../../../lib/models/ticket';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ticket: Ticket;

  constructor() {}
}
