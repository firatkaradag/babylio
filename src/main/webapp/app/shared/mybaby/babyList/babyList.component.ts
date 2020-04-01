import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BabyService } from '../baby.service';
import { Baby } from '../baby';

@Component({
  selector: 'lio-babylist',
  templateUrl: './babyList.component.html',
  styleUrls: ['./babyList.component.css']
})
export class BabyListComponent implements OnInit {
  mybaby$: Observable<Baby[]>;
  selectedId: number;

  constructor(private service: BabyService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.mybaby$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getMybaby();
      })
    );
  }
}
