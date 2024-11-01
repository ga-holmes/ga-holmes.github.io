// MapComponent.js

// FROM: https://mxd.codes/articles/how-to-create-a-web-map-with-open-layers-and-react 

import React, { useState, useEffect, useRef } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';

function MapComponent() {
    useEffect(() => {
        const osmLayer = new TileLayer({
            preload: Infinity,
            source: new OSM(),
        })

        const map = new Map({
            target: "map",
            layers: [osmLayer],
            view: new View({
                center: [0, 0],
                zoom: 0,
            }),
        });
        return () => map.setTarget(null)
    }, []);

    return (
        <div style={{ height: '300px', width: '100%' }} id="map" className="map-container" />
    );
}

export default MapComponent;