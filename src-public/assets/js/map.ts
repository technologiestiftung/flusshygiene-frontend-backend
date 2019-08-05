import { Deck } from '@deck.gl/core';
import { ScatterplotLayer } from '@deck.gl/layers';
// const mapboxgl =  require('mapbox-gl');

document.addEventListener('DOMContentLoaded', () => {
  const INITIAL_VIEW_STATE = {
    bearing: 0,
    latitude: 52,
    longitude: 13,
    pitch: 0,
    zoom: 4,
  };

  mapboxgl.accessToken = process.env.MapboxAccessToken; // eslint-disable-line

  const data = window.mapData; // [{ name: 'Colma (COLM)', code: 'CM', address: '365 D Street, Colma CA 94014', exits: 4214, coordinates: [-122.466233, 37.684638] }];

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    // Note: deck.gl will be in charge of interaction and event handling
    interactive: false,
    center: [INITIAL_VIEW_STATE.longitude, INITIAL_VIEW_STATE.latitude],
    zoom: INITIAL_VIEW_STATE.zoom,
    bearing: INITIAL_VIEW_STATE.bearing,
    pitch: INITIAL_VIEW_STATE.pitch,
  });

  const layer = new ScatterplotLayer({
    id: 'scatterplot-layer',
    data,
    pickable: true,
    opacity: 0.8,
    stroked: true,
    filled: true,
    radiusScale: 6,
    radiusMinPixels: 1,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 1,
    getPosition: d => [d.latitude, d.longitude],
    getRadius: 100,
    getFillColor: d => [255, 140, 0],
    getLineColor: d => [0, 0, 0],
    // onHover: ({ object, x, y }) => {
    //   const tooltip = `${object.name}`;
    //   /* Update tooltip
    //      http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
    //   */
    // }
  });

  const deck = new Deck({
    canvas: 'deck-canvas',
    width: '100%',
    height: '100%',
    initialViewState: INITIAL_VIEW_STATE,
    controller: true,
    onViewStateChange: ({ viewState }) => {
      map.jumpTo({
        center: [viewState.longitude, viewState.latitude],
        zoom: viewState.zoom,
        bearing: viewState.bearing,
        pitch: viewState.pitch,
      });
    },
    layers: [
      layer,

      // new GeoJsonLayer({
      //   id: 'airports',
      //   data: AIR_PORTS,
      //   // Styles
      //   filled: true,
      //   pointRadiusMinPixels: 2,
      //   opacity: 1,
      //   pointRadiusScale: 2000,
      //   getRadius: f => 11 - f.properties.scalerank,
      //   getFillColor: [200, 0, 80, 180],
      //   // Interactive props
      //   pickable: true,
      //   autoHighlight: true,
      //   onClick: info =>
      //     // eslint-disable-next-line
      //     info.object && alert(`${info.object.properties.name} (${info.object.properties.abbrev})`)
      // }),

      // new ArcLayer({
      //   id: 'arcs',
      //   data: AIR_PORTS,
      //   dataTransform: d => d.features.filter(f => f.properties.scalerank < 4),
      //   // Styles
      //   getSourcePosition: f => [-0.4531566, 51.4709959], // London
      //   getTargetPosition: f => f.geometry.coordinates,
      //   getSourceColor: [0, 128, 200],
      //   getTargetColor: [200, 0, 80],
      //   getWidth: 1
      // })
    ],
  });
});
