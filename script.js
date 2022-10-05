function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    mapId: "760b63c14d90d0ab",
    center: { lat: 48.85, lng: 2.35 },
    zoom: 12,
  });
}

window.initMap = initMap;
