import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as ChatActions from 'src/app/@core/stores/chat/chat.actions';
import * as ChatSelector from 'src/app/@core/stores/chat/chat.selectors';
import * as fromApp from 'src/app/@core/stores/app.reducer';
import { Subscription } from 'rxjs';

export interface User {
  name: string;
  message: string[];
}

export interface Response {
  id?: number;
  member: 'chatbot' | 'user';
  chat: '';
}

@Component({
  selector: 'app-ai-chat',
  templateUrl: './ai-chat.component.html',
  styleUrls: ['./ai-chat.component.scss'],
})
export class AiChatComponent implements OnInit, OnDestroy {
  user: User = {
    name: '',
    message: [],
  };
  chat: Response[] = [];
  getChatSub!: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.getResponse()
  }

  getResponse() {
    this.store.dispatch(
      ChatActions.GetChat({
        payload: { uid: 'user01', msg: 'hello' },
      })
    );

    this.getChatSub = this.store
      .pipe(select(ChatSelector.getChat))
      .subscribe((resData: any) => {
        if (resData) {
          console.log(resData);
        }
      });
  }

  ngOnDestroy(): void {
    if (this.getChatSub) {
      this.getChatSub;
    }
  }
}
