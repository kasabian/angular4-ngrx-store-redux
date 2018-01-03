import {Route} from '../models/route.model';
import {
  EditForm,
  generateMockEditForm
} from '../models/edit-form.model';
import {
  All,
  SET_EDIT_FORM,
  CLEAR_EDIT_FORM
} from '../actions/edit-form.actions';


export function editFormReducer(state: EditForm = generateMockEditForm(), action: All): EditForm {
  switch (action.type) {
    case SET_EDIT_FORM:
      return setEditFormReducer(state, action.payload);
    case CLEAR_EDIT_FORM:
      return clearEditFormReducer(state);
    default:
      return state;
  }
}

export function setEditFormReducer(state: EditForm, payload: Route): EditForm {
  return {
    ...state,
    route: payload,
    isEdit: true
  };
}

export function clearEditFormReducer(state: EditForm): EditForm {
  return {
    ...state,
    route: null,
    isEdit: false
  };
}
