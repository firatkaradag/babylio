import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Baby } from './baby';
import { MYBABY } from './mock-mybaby';
//import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class BabyService {
  //constructor(private messageService: MessageService) { }

  getMybaby(): Observable<Baby[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('BabyService: fetched mybaby');
    return of(MYBABY);
  }

  getBaby(id: number | string) {
    return this.getMybaby().pipe(
      // (+) before `id` turns the string into a number
      map((mybaby: Baby[]) => mybaby.find(baby => baby.id === +id))
    );
  }
}
