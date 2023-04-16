import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Feature from 'ol/Feature';

function OLMap() {
  const mapRef = useRef(null);//é um hook do react que permite fazer referência a um valor que não é necessário para renderização

  useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [
              new Feature({
                geometry: new Point([0,0]),
              }),
            ],
          }),
        }),
      ],
     
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
      
    });

    return () => map.dispose();
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
}

export default OLMap;

