import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../models/app-state.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-route-map',
  templateUrl: './route-map.html',
  styles: []
})
export class RouteMapComponent implements OnInit, OnDestroy {

  storeSubscription: Subscription;
  mapObj: any = {};

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.storeSubscription = this.store.select('map').subscribe(map => {

      this.mapObj.isVisible = false;

      setTimeout(() => {
        if (map && map.isVisible) {
          this.mapObj = map;
        }
      }, 0);

    })
  }

  ngOnDestroy() {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }

}
