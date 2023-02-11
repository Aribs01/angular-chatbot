import { createAction, props } from '@ngrx/store';

export const ResetStore = createAction('[Chat] Reset Store');

export const IsLoading = createAction(
  '[Chat] Is Loading',
  props<{
    payload: boolean;
  }>()
);

export const GetChat = createAction(
  '[Chat] Get Chat',
  props<{
    payload: {
      uid: string;
      msg: string;
    };
  }>()
);

export const SaveChat = createAction(
  '[Users] Save Chat',
  props<{
    payload: any;
  }>()
);
