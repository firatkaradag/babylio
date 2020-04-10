import { Component, OnInit, Input } from '@angular/core';

import { Baby } from './baby';

@Component({
  selector: 'lio-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() BABIES: Baby | undefined;

  constructor() {}

  ngOnInit(): void {}
}
