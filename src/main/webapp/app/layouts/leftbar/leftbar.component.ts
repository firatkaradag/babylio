import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lio-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss']
})
export class LeftbarComponent {
  constructor(private router: Router) {}
}
