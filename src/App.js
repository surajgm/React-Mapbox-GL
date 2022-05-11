import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import mapMarker from "./marker/mapMarker.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Map
        initialViewState={{
          longitude: 87.27721567619342,
          latitude: 26.449432670637346,
          zoom: 8,
          pitch: 50,
        }}
        style={{ width: 800, height: 400 }}
        mapStyle="mapbox://styles/ankur20/cklq3agbe6tc918ny8hlc7ch6"
        mapboxAccessToken="pk.eyJ1IjoiYW5rdXIyMCIsImEiOiJja2tiOW4wNGIwNDh5MnBsY3EzeDNmcTV4In0.d4LelcSFDElA3BctgWvs1A"
      >
        <Marker
          latitude={26.449432670637346}
          longitude={87.27721567619342}
          anchor="bottom"
        >
          <img
            src={mapMarker}
            alt="mapMarker"
            style={{ width: 25, height: 25 }}
          />
        </Marker>
      </Map>
    </div>
  );
}

export default App;
