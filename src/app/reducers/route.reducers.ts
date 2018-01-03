import {
  ADD_NEW_ROUTE,
  DELETE_ROUTE,
  All, UPDATE_ROUTE,
} from '../actions/route.actions';

import {
  generateMockState
} from '../models/app-state.model';
import {Route} from '../models/route.model';


export function routesReducer(state: Route[] = generateMockState(), action: All): Route[] {
  switch (action.type) {
    case ADD_NEW_ROUTE:
      return addNewRouteReducer(state, action.payload);
    case DELETE_ROUTE:
      return deleteRouteReducer(state, action.payload);
    case UPDATE_ROUTE:
      return updateRouteReducer(state, action.payload);
    default:
      return state;
  }
}

export function updateRouteReducer(state: Route[], payload: Route): Route[] {
  const newState = Object.assign([], state);

  newState.forEach((route: Route, index: number) => {
    if (route.id === payload.id) {
      newState[index] = payload;
    }
  });

  return newState;
}

export function addNewRouteReducer(state: Route[], payload: Route): Route[] {
  const newState = Object.assign([], state);

  if (state.length) {
    payload.id = state[0].id + 1;
  }

  newState.unshift(payload);
  return newState;
}

export function deleteRouteReducer(state: Route[], payload: number): Route[] {
  const newState = Object.assign([], state).filter( obj => {
    return obj.id !== payload;
  });
  return newState;
}
