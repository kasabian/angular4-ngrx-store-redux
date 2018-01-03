import {Route} from './route.model';

export interface Map {
  route: Route;
  isVisible: boolean;
}

export function generateMockMap(): Map {
  return {
    isVisible: false,
    route: null
  };
}
