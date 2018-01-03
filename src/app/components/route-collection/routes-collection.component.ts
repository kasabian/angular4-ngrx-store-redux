import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import {Route} from '../../models/route.model';

@Component({
  selector: 'app-route-collection',
  templateUrl: './route-collection.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteCollectionComponent  {

  @Input() routeItems: Route[];

  constructor() {}
}
