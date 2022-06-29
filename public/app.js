const myMap = L.map("map", {
    center: [48.868672, 2.34213],
    zoom: 12,
  });
  
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: "15",
  }).addTo(myMap);
  
  const marker = L.marker([48.87007, 2.346453]);
  marker.addTo(myMap).bindPopup("<p1><b>The Hoxton, Paris</b></p1>").openPopup();
  
  const secondArrondissementCoords = [
    [48.863368120198004, 2.3509079846928516],
    [48.86933262048345, 2.3542531602919805],
    [48.87199261164275, 2.3400569901592183],
    [48.86993336274516, 2.3280142476578813],
    [48.86834104280146, 2.330308418109664],
  ];
  const secondArrPolygon = L.polygon(secondArrondissementCoords).addTo(myMap);
  myMap.fitBounds(secondArrPolygon.getBounds());
  
  const redIcon = L.icon({
    iconUrl: "./assets/red-pin.png",
    iconSize: [38, 38],
    iconAnchor: [19, 38],
  });
  
  const rS = L.marker([48.866200610611926, 2.352236247419453], {
    icon: redIcon,
  }).bindPopup("RÃ©aumur-SÃ©bastopol");
  const sSD = L.marker([48.869531786321566, 2.3528590208055196], {
    icon: redIcon,
  }).bindPopup("Strasbourg-Saint-Denis");
  const sentier = L.marker([48.8673721067762, 2.347107922912739], {
    icon: redIcon,
  }).bindPopup("Sentier");
  const bourse = L.marker([48.86868503971672, 2.3412285142058167], {
    icon: redIcon,
  }).bindPopup("Bourse");
  const qS = L.marker([48.869560129483226, 2.3358638645569543], {
    icon: redIcon,
  }).bindPopup("Quatre Septembre");
  const gB = L.marker([48.871282159004856, 2.3434818588892714], {
    icon: redIcon,
  }).bindPopup("Grands Boulevards");
  
  const stations = L.layerGroup([rS, sSD, sentier, bourse, qS, gB]).addTo(myMap);