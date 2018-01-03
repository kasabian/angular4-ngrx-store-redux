import {Route} from './route.model';

export interface EditForm {
  route: Route;
  isEdit: boolean;
}

export function generateMockEditForm(): EditForm {
  return {
    route: null,
    isEdit: false
  };
}
