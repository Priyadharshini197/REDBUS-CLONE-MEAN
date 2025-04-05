import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-planner',
  template: '<div id="map"></div>',
  styleUrls: ['./route-planner.component.css']
})
export class RoutePlannerComponent implements OnInit {
  map: google.maps.Map;

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }
}
