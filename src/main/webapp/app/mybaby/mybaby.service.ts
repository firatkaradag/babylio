import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { BABIES } from './mock-baby';
import { Baby } from './baby';

@Injectable({
  providedIn: 'root'
})
export class MybabyService {
  constructor() {}

  getBabies(): Observable<Baby[]> {
    return of(BABIES);
  }

  getBaby(id: number | string): any {
    return this.getBabies().pipe(map((babies: Baby[]) => babies.find(baby => baby.id === +id)));
  }
}
