import React, { useEffect, useRef } from 'react';
import { Map, View } from 'ol';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Style, Stroke } from 'ol/style';
import { LineString } from 'ol/geom';
import Feature from 'ol/Feature';
import { fromLonLat } from 'ol/proj';
import { defaults as defaultControls, ScaleLine } from 'ol/control';
import 'ol/ol.css';


function Line() {
    const mapElement = useRef(null);
  
    useEffect(() => {
        if (mapElement.current) {
          // cria uma instância do mapa
          const map = new Map({
            target: mapElement.current,
            controls: defaultControls().extend([new ScaleLine()]),
            layers: [
              // adiciona uma camada de azulejos de OpenStreetMap
              new TileLayer({
                source: new OSM(),
              }),
            ],
            view: new View({
              center: fromLonLat([-43.2075, -22.9028]), // define o centro do mapa
              zoom: 10, // define o nível de zoom
            }),
          });
      
          // cria uma camada vetorial e adiciona uma feature LineString
          const vectorLayer = new VectorLayer({
            source: new VectorSource(),
            style: new Style({
              stroke: new Stroke({
                color: '#FF0000',
                width: 2,
              }),
            }),
          });
      
          const lineString = new LineString([
            fromLonLat([-43.2075, -22.9028]),
            fromLonLat([-43.1908, -22.9086]),
          ]);
      
          const feature = new Feature({
            geometry: lineString,
          });
      
          vectorLayer.getSource().addFeature(feature);
      
          map.addLayer(vectorLayer);
        }
      }, []);
      
  
    return <div ref={mapElement} className="map" style={{ width: '100%', height: '400px' }}/>;
  }
  
  export default Line;