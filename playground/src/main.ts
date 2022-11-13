import './style.css'
import 'leaflet/dist/leaflet.css'

import L from 'leaflet'
import wmtsLayer from '../../src/index'

console.log(wmtsLayer)

L.map('app', {
  center: [27.973523746875703, 120.93457653553327],
  zoom: 13,
  zoomControl: false,
  attributionControl: false,
})
  .addLayer(L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png'))
