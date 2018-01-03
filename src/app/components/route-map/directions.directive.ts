import {GoogleMapsAPIWrapper} from '@agm/core/services/google-maps-api-wrapper';
import {Directive, Input, OnInit} from '@angular/core';
declare var google: any;

@Directive({
  selector: 'google-map-directions'
})
export class DirectionsMapDirective implements OnInit {
  @Input() origin;
  @Input() destination;
  constructor (private gmapsApi: GoogleMapsAPIWrapper) {}
  ngOnInit() {

    this.gmapsApi.getNativeMap().then(map => {
      const directionsService = new google.maps.DirectionsService;
      const directionsDisplay = new google.maps.DirectionsRenderer;
      directionsDisplay.setMap(map);

      directionsService.route({
        origin: {lat: parseFloat(this.origin.latitude), lng: parseFloat(this.origin.longitude)},
        destination: {lat: parseFloat(this.destination.latitude), lng: parseFloat(this.destination.longitude)},
        waypoints: [],
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });

    });
  }
}
