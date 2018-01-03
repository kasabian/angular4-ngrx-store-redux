import {Route} from './route.model';
import {Map} from './map.model';
import {EditForm} from './edit-form.model';

export interface AppState {
  routes: Route[];
  map: Map,
  editForm: EditForm
}

export function generateMockState(): Route[] {
  return [];
}
