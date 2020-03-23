import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoginModalService } from 'app/core/login/login-modal.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';

import { Baby } from 'app/shared/card/baby';

@Component({
  selector: 'lio-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  account: Account | null = null;
  authSubscription?: Subscription;
  myBabyList: Baby[] = [];

  // Greeting Start
  //:string kaldirilca hata cozuldu
  greeting = 'Welcome';
  //:string kaldirilca hata cozuldu
  firstName = 'Levent';

  greet(): void {
    //:void eklenince hata cozuldu
    const today = new Date();
    const curHr = today.getHours();

    if (curHr >= 0 && curHr < 6) {
      this.greeting = 'What are you doing that early?';
    } else if (curHr >= 6 && curHr <= 12) {
      this.greeting = 'Good Morning';
    } else if (curHr >= 12 && curHr < 17) {
      this.greeting = 'Good Afternoon';
    } else {
      this.greeting = 'Good Evening';
    }
  }
  // Greeting End

  constructor(private accountService: AccountService, private loginModalService: LoginModalService) {}
  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));

    this.greet();

    this.myBabyList = [
      {
        id: 1,
        name: 'baby1',
        relation: '3',
        currentMilestone: 'string22',
        nextMilestone: 'string33',
        img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
      },
      {
        id: 2,
        name: 'baby2',
        relation: '2',
        currentMilestone: 'string2',
        nextMilestone: 'string3',
        img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
      },
      {
        id: 3,
        name: 'baby3',
        relation: '2',
        currentMilestone: 'string2',
        nextMilestone: 'string3',
        img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
      }
    ];
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginModalService.open();
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
