import { Controller } from "@hotwired/stimulus"
import mapboxgl from "mapbox-gl"

export default class extends Controller {
  static values = {
    apiKey: String,
    markers: Array
  }

  connect() {
    mapboxgl.accessToken = this.apiKeyValue

    this.map = new mapboxgl.Map({
      container: this.element,
      style: "mapbox://styles/mapbox/streets-v10"
    })

    this.#addMarkersToMap()
    this.#fitMapToMarkers()
  }

  #addMarkersToMap() {
    console.log("📌 Marqueurs reçus par JavaScript :", this.markersValue); // Ajoute ce log
    this.markersValue.forEach((marker) => {
      new mapboxgl.Marker()
        .setLngLat([marker.lng, marker.lat])
        .addTo(this.map);
    });
  }


  #fitMapToMarkers() {
    const bounds = new mapboxgl.LngLatBounds();
    this.markersValue.forEach(marker => bounds.extend([marker.lng, marker.lat]));
    

    if (this.markersValue.length === 1) {
      this.map.setZoom(14);
      this.map.setCenter([this.markersValue[0].lng, this.markersValue[0].lat]);
    } else {
      this.map.fitBounds(bounds, { padding: 50, maxZoom: 15, duration: 0 });
    }
  }

}
