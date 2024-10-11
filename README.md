# leaflet-challenge

### Background

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

### Create Earthquake Visualization

1. Obtained dataset (all earthquakes from past 7 days) ) via the following link:
   * https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson
2. Imported and visualised data by doing the following:
   * Using Leaflet, created a map that plots all earthquakes from dataset based on longitude & latitude.
     * Data markers reflect earthquake magnitude by size, and earthquake depth by color.
   * Including popups that provide additional information about the earthquake when its associated marker is clicked.
   * Creating a legend that provides context for map data (i.e. color scale according to earthquake depth).
