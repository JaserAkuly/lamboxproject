import { Component, OnInit } from '@angular/core';
/*
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { Language } from './../forum.models';
import { SetLanguage } from './../forum.service';
import { getLanguage, getUuid } from './store/settings/settings.selectors';
import { GetUserDislikes, GetUserLikes, HandleOffline, HandleOnline} from './store/user/user.actions';
import { getIsOnline } from './store/user/user.selectors';
*/

@Component({
  templateUrl: './forum-page.component.html',
  styleUrls: ['./forum-page.component.scss']
})
export class ForumPageComponent implements OnInit {
  /*

  language$: Observable<Language>;
  isOnline$: Observable<boolean>;

  today = Date.now();

  constructor(private store: Store) {}
*/
  ngOnInit() {/*
    this.language$ = this.store.select(getLanguage);
    this.isOnline$ = this.store.select(getIsOnline);

    this.language$.pipe(first()).subscribe((language) => {
      this.store.dispatch(new SetLanguage(language));
    });

    this.store.selectOnce(getUuid).subscribe((uuid) => {
      this.store.dispatch(new GetUserLikes(uuid));
      this.store.dispatch(new GetUserDislikes(uuid));
    });

    window.addEventListener('offline', () => {
      this.store.dispatch(new HandleOffline());
    });
    window.addEventListener('online', () => {
      this.store.dispatch(new HandleOnline());
    });
  }

  setLanguage(language: Language) {
    this.store.dispatch(new SetLanguage(language));
    */
  }
  
}
