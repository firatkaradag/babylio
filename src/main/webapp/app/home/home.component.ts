import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoginModalService } from 'app/core/login/login-modal.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';

// import { CardComponent } from 'app/shared/card/card.component';
import { Baby } from 'app/shared/card/baby';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  myBabyList: Baby[] = [];

  account: Account | null = null;
  authSubscription?: Subscription;

  constructor(private accountService: AccountService, private loginModalService: LoginModalService) {}

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));

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
