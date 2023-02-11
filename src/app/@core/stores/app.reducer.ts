import { ActionReducerMap } from '@ngrx/store';
import * as fromChat from './chat/chat.reducer';

export interface AppState {
    chat: fromChat.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  chat: fromChat.chatReducer,
};
