import { createReducer, on, Action } from '@ngrx/store';
// import * as UsersActions from './users.actions';
import * as ChatActions from './chat.actions';

export interface State {
  isLoading: boolean;
  chat: any[] | null;
}

const initialState: State = {
  isLoading: false,
  chat: null,
};

const chatReducerInternal = createReducer(
  initialState,
  on(ChatActions.ResetStore, (state) => ({
    ...initialState,
  })),
  on(ChatActions.IsLoading, (state, { payload }) => ({
    ...state,
    isLoading: payload,
  })),
  on(ChatActions.SaveChat, (state, { payload }) => ({
    ...state,
    chat: payload,
  }))
);

export function chatReducer(state: State | undefined, action: Action) {
  return chatReducerInternal(state, action);
}
