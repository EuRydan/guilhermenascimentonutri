import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import styles from './MapLocation.module.css';

export function MapLocation({ latitude, longitude, popupTitle, popupSubtitle }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json', // dark theme map
      center: [longitude, latitude],
      zoom: 15,
      attributionControl: false
    });

    // Add navigation controls (zoom in/out)
    map.current.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'bottom-right');

    // Create a custom DOM element for the marker
    const markerEl = document.createElement('div');
    markerEl.className = styles.customMarker;
    markerEl.innerHTML = `
      <span class="${styles.markerPing}"></span>
      <div class="${styles.markerDot}">
        <div class="${styles.markerDotInner}"></div>
      </div>
    `;

    // Create a popup
    const popup = new maplibregl.Popup({ offset: 25, closeButton: false }).setHTML(
      `<div class="${styles.popupContent}">
        <div class="${styles.popupTitle}">${popupTitle}</div>
        <div class="${styles.popupSubtitle}">${popupSubtitle}</div>
      </div>`
    );

    // Add marker to map
    new maplibregl.Marker({ element: markerEl })
      .setLngLat([longitude, latitude])
      .setPopup(popup)
      .addTo(map.current);

  }, [latitude, longitude, popupTitle, popupSubtitle]);

  return (
    <div className={styles.mapWrapper}>
      <div ref={mapContainer} className={styles.mapContainer} />
    </div>
  );
}
