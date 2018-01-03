import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../models/app-state.model';
import {Route} from '../../models/route.model';
import {DeleteRoute} from '../../actions/route.actions';
import {
  ClearEditForm,
  SetEditForm
} from '../../actions/edit-form.actions';
import {SetRoute} from '../../actions/map.actions';

@Component({
  selector: 'app-route-item',
  templateUrl: './route-item.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteItemComponent {

  @Input() route: Route;

  constructor(private store: Store<AppState>) { }

  public showMap(route: Route) {
    this.store.dispatch(new SetRoute(route) );
  }

  public removeRoute(id: number): void {
    this.store.dispatch(new DeleteRoute(id));
    this.store.dispatch(new ClearEditForm());
  }

  public editRoute(route: Route): void {
    this.store.dispatch(new SetEditForm(route) );
  }
}
