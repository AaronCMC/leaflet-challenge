// Store GeoJSON Url endpoint as queryUrl.
let queryURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create a map object.
let myMap = L.map("map", {
    center: [37.50, -119.50],
    zoom: 5
  });
  
// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
 
// Marker radius function based on earthquake magnitude
function markerRadius (magnitude) {
    return magnitude * 4;
}

// Marker color function based on depth
function markerColor(depth) {
    if (depth > 90) {
        return "#FF0000"; // red
    } else if (depth > 70) {
        return "#FF6600"; // dark orange
    } else if (depth > 50) {
        return "#FFCC00"; // orange
    } else if (depth > 30) {
        return "#FFFF00"; // yellow
    } else if (depth > 10) {
        return "#CCFF00"; // yellowish green
    } else {
        return "#00FF00"; // light green
    }
}

// Marker style function with radius based on magnitude and color based on depth
function markerStyle(feature) {
    return {
        radius: markerRadius(feature.properties.mag),
        fillColor: markerColor(feature.geometry.coordinates[2]),
        fillOpacity: 0.75,
        color: "black",
        opacity: 1,
        weight: 1
    };
}

// Perform GET request to queryURL
d3.json(queryURL).then(function(data) {
    L.geoJSON(data, {
        pointToLayer: function(feature, latlng) {
            return L.circleMarker(latlng, markerStyle(feature));
        },
        style: markerStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place + "<br>Depth: " + feature.geometry.coordinates[2]);
        }
    }).addTo(myMap)
});

// Add Legend
let legend = L.control({position: "bottomright"});
legend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend"),
    depth = [-10, 10, 30, 50, 70, 90];

    for (let i = 0; i < depth.length; i++) {
        div.innerHTML += 
        '<i style="background:' + markerColor(depth[i] + 1) +  '"></i>' + 
        depth[i] + (depth[i+1] ? '&ndash;' + depth[i+1] + '<br>' : '+');
    }
    return div;
};
legend.addTo(myMap);

