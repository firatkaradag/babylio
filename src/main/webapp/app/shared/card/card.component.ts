import { Component, OnInit, Input } from '@angular/core';

import { Baby } from './baby';

@Component({
  selector: 'jhi-card',
  templateUrl: `
  <mat-card class="card">
      <mat-card-header>
          <img mat-card-avatar src={{baby.avatar}}>
          <mat-card-title>cardTemplate {{baby.name}}</mat-card-title>
          <mat-card-subtitle>{{baby.relation}}</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image src={{baby.img}}>
      <mat-card-content>
        <p>
              Recent Milestone : {{baby.currentMilestone}}
            <br>Possible Next Milestone : {{baby.nextMilestone}}
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>SHARE</button>
      </mat-card-actions>
  </mat-card>
`,
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() baby: Baby | undefined;

  constructor() {}

  ngOnInit() {}
}
