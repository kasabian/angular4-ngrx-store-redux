import {Action} from '@ngrx/store';
import {Route} from '../models/route.model';


export const ADD_NEW_ROUTE = '[Route] AddNewRoute';
export const DELETE_ROUTE = '[Route] DeleteRoute';
export const UPDATE_ROUTE = '[Route] UpdateRoute';

export class AddNewRoute implements Action {
  readonly type = ADD_NEW_ROUTE;

  constructor(public payload: Route) {}
}

export class DeleteRoute implements Action {
  readonly type = DELETE_ROUTE;

  constructor(public payload: number) {}
}

export class UpdateRoute implements Action {
  readonly type = UPDATE_ROUTE;

  constructor(public payload: Route) {}
}

export type All
  = AddNewRoute |
    DeleteRoute |
    UpdateRoute;

