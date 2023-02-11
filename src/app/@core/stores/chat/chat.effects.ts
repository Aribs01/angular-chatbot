import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as fromApp from '../app.reducer';
import { HttpClient } from '@angular/common/http';
// import * as UserActions from './users.actions';
import * as ChatActions from './chat.actions'
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Router } from '@angular/router';

@Injectable()
export class ChatEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromApp.AppState>,
    private http: HttpClient,
    private router: Router
  ) {}

  getChat$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.GetChat),
      withLatestFrom(this.store),
      switchMap(([chatData]) => {
        return this.http
          .get<any>(
            `${environment.brainShopUrl}uid=${chatData.payload.uid}&msg=${chatData.payload.msg}`
          )
          .pipe(
            map((resData: any) => {
                console.log('store' + resData);
                
              this.store.dispatch(ChatActions.IsLoading({ payload: false }));

              if (resData.succeeded === true) {
                return ChatActions.SaveChat({
                  payload: resData.entity,
                });
              } else {
                return { type: '[User] Failed To Get Chat' };
              }
            }),
            catchError((errorRes) => {
              this.store.dispatch(ChatActions.IsLoading({ payload: false }));

              this.store.dispatch({
                type: `[Chat][CatchError] Failed To Get Chat ${errorRes.message}`,
              });

              return of();
            })
          );
      })
    )
  );


  

 
}
