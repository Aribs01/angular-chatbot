import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as ChatActions from 'src/app/@core/stores/chat/chat.actions';
import * as ChatSelector from 'src/app/@core/stores/chat/chat.selectors';
import * as fromApp from 'src/app/@core/stores/app.reducer';
import { Subscription } from 'rxjs';

export interface User {
  name: string;
}

export interface Response {
  id?: number;
  member: Member;
  chat: string;
}

export enum Member {
  chatbot,
  user
}

@Component({
  selector: 'app-ai-chat',
  templateUrl: './ai-chat.component.html',
  styleUrls: ['./ai-chat.component.scss'],
})
export class AiChatComponent implements OnInit, OnDestroy {
  user: User = {
    name: '',
  };
  chat: Response[] = [];
  getChatSub!: Subscription;
  inputText: string = '';
  another: boolean = true;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    // this.getResponse()
  }

  botReply() {
    if (this.inputText && this.another === true) {
      this.another = false
      this.user.name = this.inputText
      let response = {
        member: Member.user,
        chat: this.inputText,
      }
      this.chat.push(response)
      setTimeout(() => {
        response = {
          member: Member.chatbot,
          chat: 'Hi ' + this.inputText + ' Nice to meet you',
        }
        this.chat.push(response)
        this.inputText = '';
      }, 1000);
    }
    else {
      let response = {
        member: Member.user,
        chat: this.inputText,
      }
      this.chat.push(response)
      setTimeout(() => {
        response = {
          member: Member.chatbot,
          chat: this.inputText + ' ?',
        }
        this.chat.push(response)
        this.inputText = '';
      }, 1000);
    }
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
          // console.log(resData);
        }
      });
  }

  ngOnDestroy(): void {
    if (this.getChatSub) {
      this.getChatSub;
    }
  }
}
