import { createSelector } from '@ngrx/store';
import * as fromApp from '../app.reducer';
// import * as fromUsers from './users.reducer';
import * as fromChat from './chat.reducer';

const getChatState = (state: fromApp.AppState) => state.chat;

export const getChatIsLoading = createSelector(
  getChatState,
  (state: fromChat.State) => state.isLoading
);

export const getChat = createSelector(
  getChatState,
  (state: fromChat.State) => state.chat
);
