import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {routesReducer} from './reducers/route.reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {RouteCollectionComponent} from './components/route-collection/routes-collection.component';
import {AddRouteFormComponent} from './components/add-route-form/add-route-form.component';
import {RouteItemComponent} from './components/route-item/route-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import {editFormReducer} from './reducers/edit-form.reducers';
import {AgmCoreModule} from '@agm/core';
import {RouteMapComponent} from './components/route-map/route-map.component';
import {DirectionsMapDirective} from './components/route-map/directions.directive';
import {mapReducer} from './reducers/map.reducers';

@NgModule({
  declarations: [
    AppComponent,
    RouteCollectionComponent,
    AddRouteFormComponent,
    RouteItemComponent,
    RouteMapComponent,
    DirectionsMapDirective
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      routes: routesReducer,
      editForm: editFormReducer,
      map: mapReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC0CMvMxhECxs4WFQt5RLkTilFJbsZQDPQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
