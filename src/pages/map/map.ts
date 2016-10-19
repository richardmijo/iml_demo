import { Component } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';

declare var google: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {



  constructor(public confData: ConferenceData) { }

  ionViewDidLoad() {

    var GORYOKAKU_POINTS = [
      new google.maps.LatLng(-4.0206437, -79.2090138),
      new google.maps.LatLng(-4.0175365, -79.2115624),
      new google.maps.LatLng(-4.0110664, -79.2124166),
      new google.maps.LatLng(-4.0048032, -79.2099252),
      new google.maps.LatLng(-4.0025272, -79.2073837),
      new google.maps.LatLng(-3.999044, -79.2014435),
      new google.maps.LatLng(-3.9963442, -79.1987617)
    ];


    var flightPlanCoordinates = [
      new google.maps.LatLng(-3.9985167, -79.2019654),
      new google.maps.LatLng(-4.0013391, -79.2012887),
      new google.maps.LatLng(-3.9899369, -79.2041986),
      //new google.maps.LatLng(-27.46758, 153.027892)
    ];

    var flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });


    var bermudaTriangle = new google.maps.Polygon({
      paths: GORYOKAKU_POINTS,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });




    this.confData.getMap().then(mapData => {
      let mapEle = document.getElementById('map');

      let map = new google.maps.Map(mapEle, {
        center: mapData.find(d => d.center),
        zoom: 16
      });

      mapData.forEach(markerData => {
        let infoWindow = new google.maps.InfoWindow({
          content: `<h5>${markerData.name}</h5>`
        });

        let marker = new google.maps.Marker({
          position: markerData,
          map: map,
          title: markerData.name
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });

      google.maps.event.addListenerOnce(map, 'idle', () => {
        mapEle.classList.add('show-map');
      });

      flightPath.setMap(map);

      bermudaTriangle.setMap(map);


    });
  }
}
