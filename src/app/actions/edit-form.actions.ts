import {Action} from '@ngrx/store';
import {Route} from '../models/route.model';


export const SET_EDIT_FORM = '[EDIT_FORM] SetEditForm';
export const CLEAR_EDIT_FORM = '[EDIT_FORM] ClearEditForm';

export class SetEditForm implements Action {
  readonly type = SET_EDIT_FORM;

  constructor(public payload: Route) {}
}

export class ClearEditForm implements Action {
  readonly type = CLEAR_EDIT_FORM;
}

export type All
  = SetEditForm |
    ClearEditForm;

