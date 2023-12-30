import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import * as L from 'leaflet';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
//import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
//import 'leaflet-routing-machine/dist/leaflet-routing-machine.js';



@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit{
  private map!: L.Map;
  private centroid: L.LatLngExpression = [48.9047, 2.2140 ];
  private lat=48.9047;
  private long=2.2140;
  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 15
    });

    // Ajouter un fond de tuiles standard (clair)
  const lightTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 0,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });

  // Ajouter un fond de tuiles sombre
  const darkTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 18,
    minZoom: 10,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });



  // Ajouter les trois fonds de tuiles à un groupe de couches
  const baseMaps = {
    'Clair': lightTiles,
    'Sombre': darkTiles,

  };




  lightTiles.addTo(this.map);
  L.control.layers(baseMaps).addTo(this.map);
  const geocoderControl = (L.Control as any).geocoder({
    geocoder: (L.Control as any).Geocoder.nominatim()
  }).addTo(this.map);

  // Ajouter le module de routage
  const routingControl = (L as any).Routing.control({

    routeWhileDragging: true,
    geocoder: (L.Control as any).Geocoder.nominatim(),
    rooter: new (L as any).Routing.osrmv1({
      language: "fr",
    })
  }).addTo(this.map);




    this.map.whenReady(() => {
      this.map.invalidateSize();
    });




    //var marker = L.marker([48.9049, 2.2143]).addTo(this.map);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const userLatLng: L.LatLngExpression = [position.coords.latitude, position.coords.longitude];
          this.map.setView(userLatLng, 13);

         const blackIcon = new L.Icon({
          iconUrl: '../../assets/emplacement.png', // Ajustez le chemin vers votre image noire
          iconSize: [50, 50], // Taille de l'icône
          iconAnchor: [24, 32], // Point d'ancrage de l'icône
          popupAnchor: [0, -32] // Point d'ancrage du popup par rapport à l'icône
        });

        const marker = L.marker(userLatLng, { icon: blackIcon })
          .addTo(this.map)
          .bindPopup('Votre position')
          .openPopup();
        },
        error => {
          console.error('Erreur de géolocalisation : ', error.message);
        }
      );
    } else {
      console.warn('La géolocalisation n\'est pas prise en charge par ce navigateur.');
    }
    //(L.control as any).geocoder().addTo(this.map);
  }
  private setupRoutingControl() {
    const waypoints = [
      L.latLng(57.74, 11.94),
      L.latLng(57.6792, 11.949)
    ];

    const routingControl = (L as any).Routing.control({
      waypoints: waypoints,
      routeWhileDragging: true,
      geocoder: (L.Control as any).Geocoder.nominatim()
    }).addTo(this.map);
  }



  private loadPOIData(): void {
    // Utilisez une API ou un service de données de cartographie pour obtenir les POI
    // Ici, nous utilisons l'API Overpass de OpenStreetMap comme exemple
    const overpassAPI = 'https://overpass-api.de/api/interpreter';
    const query = `
      [out:json];
      (
        node["amenity"="restaurant"](around:${this.lat},${this.long},500);
        node["amenity"="fast_food"](around:${this.lat},${this.long},500);
        node["amenity"="bar"](around:${this.lat},${this.long},500);
      );
      out;
    `;

    fetch(`${overpassAPI}?data=${encodeURIComponent(query)}`)
      .then(response => response.json())
      .then((data: any) => this.displayPOIOnMap(data))
      .catch((error: any) => console.error('Error fetching POI data:', error));
  }

  private displayPOIOnMap(data: any): void {

    const pois: any[] = data.elements;

    pois.forEach((poi: any) => {
      const latlng: L.LatLngExpression = [poi.lat, poi.lon];
      L.marker(latlng).addTo(this.map);
    });
  }

  constructor(private router: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.initMap();

}


  redirectToEventPage() {
    this.router.navigate(['/home']);
  }
}
