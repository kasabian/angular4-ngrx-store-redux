import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './models/app-state.model';
import {Observable} from 'rxjs/Observable';
import {Route} from './models/route.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public routes: Observable<Route[]>;

  constructor(private store: Store<AppState>) {
    this.routes = this.store.select('routes');
  }

}
