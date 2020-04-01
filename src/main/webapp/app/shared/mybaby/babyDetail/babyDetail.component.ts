import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { BabyService } from '../baby.service';
import { Baby } from '../baby';

@Component({
  selector: 'lio-babydetail',
  templateUrl: './babydetail.component.html',
  styleUrls: ['./babydetail.component.css']
})
export class BabyDetailComponent implements OnInit {
  baby$: Observable<Baby>;

  constructor(private route: ActivatedRoute, private router: Router, private service: BabyService) {}

  ngOnInit() {
    this.baby$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.service.getBaby(params.get('id'))));
  }

  gotoMybaby(baby: Baby) {
    let babyId = baby ? baby.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/babies', { id: babyId, foo: 'foo' }]);
  }
}
