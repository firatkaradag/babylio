import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Baby } from '../baby';
import { MybabyService } from '../mybaby.service';

@Component({
  selector: 'lio-baby-list',
  templateUrl: './baby-list.component.html',
  styleUrls: ['./baby-list.component.scss']
})
export class BabyListComponent implements OnInit {
  babies: Observable<Baby[]> | undefined;
  selectedId: number | undefined;

  constructor(private mybabyService: MybabyService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.babies = this.mybabyService.getBabies();
  }
}

// export class BabyListComponent implements OnInit{

//     babies$: Observable<Baby[]> | undefined;
//     selectedId: number | undefined;

//     constructor (
//         private  mybabyService : MybabyService,
//         private route: ActivatedRoute
//     ) {}

//     ngOnInit() {
//         this.babies$ = this.route.paramMap.pipe(
//             switchMap(params => {
//                 // (+) before `params.get()` turns the string into a number
//                 this.selectedId = +params.get('id');
//                 return this.mybabyService.getBabies();
//             })
//         );

//     }
// }
