import {Route} from '../models/route.model';
import {
  All,
  SET_ROUTE,
  DELETE_ROUTE
} from '../actions/map.actions';

import {
  Map,
  generateMockMap
} from '../models/map.model'


export function mapReducer(state: Map = generateMockMap(), action: All): Map {
  switch (action.type) {
    case SET_ROUTE:
      return setRouteReducer(state, action.payload);
    case DELETE_ROUTE:
      return clearRouteReducer(state);
    default:
      return state;
  }
}

export function setRouteReducer(state: Map, payload: Route): Map {
  return {
    ...state,
    route: payload,
    isVisible: true
  };
}

export function clearRouteReducer(state: Map): Map {
  return Object.assign({}, generateMockMap());
}
