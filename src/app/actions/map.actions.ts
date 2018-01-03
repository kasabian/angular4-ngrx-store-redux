import {Action} from '@ngrx/store';
import {Route} from '../models/route.model';


export const SET_ROUTE = '[Map] SetRoute';
export const DELETE_ROUTE = '[Map] DeleteRoute';

export class SetRoute implements Action {
  readonly type = SET_ROUTE;

  constructor(public payload: Route) {}
}

export class DeleteRoute implements Action {
  readonly type = DELETE_ROUTE;
}

export type All
  = SetRoute |
    DeleteRoute;

