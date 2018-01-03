import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {Store} from '@ngrx/store';
import {AddNewRoute, UpdateRoute} from '../../actions/route.actions';
import {
  generateMockRoute,
  Route
} from '../../models/route.model';
import {
  FormBuilder,
  FormGroup, Validators
} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {ClearEditForm} from '../../actions/edit-form.actions';

@Component({
  selector: 'app-add-route-form',
  templateUrl: './add-route-form.html',
  styles: []
})
export class AddRouteFormComponent implements OnInit, OnDestroy {

  form: FormGroup;

  isEditing: boolean;

  route: Route;

  storeSubscription: Subscription;

  constructor(
    private store: Store<any>,
    fb: FormBuilder
  ) {
    this.form = fb.group({
      fromLat: ['', [Validators.required]],
      fromLng: ['', [Validators.required]],
      toLat: ['', [Validators.required]],
      toLng: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.storeSubscription = this.store.subscribe( store => {
      this.isEditing = store.editForm.isEdit;

      if (store.editForm.isEdit) {
        this.form.patchValue(store.editForm.route);
        this.route = store.editForm.route;
      } else {
        this.form.reset();
      }

    });
  }

  ngOnDestroy() {
    if(this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }

  public addNewRoute(): void {
    if (this.form.valid) {
      this.store.dispatch(new AddNewRoute({
        ...generateMockRoute(),
        ...this.form.value
      }));

      this.form.reset();
    } else {
      alert('Заполните форму!');
    }
  }

  public updateRoute(): void {
    this.store.dispatch(new UpdateRoute({
      ...this.route,
      ...this.form.value
    }));
    this.store.dispatch(new ClearEditForm());
  }

}
