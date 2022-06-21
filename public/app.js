const myMap = L.map('map', {
    center: [48.868672, 2.342130],
    zoom: 12,
});



L.tileLayer({s}'https://.tile.openstreetmap.org/{z}/{y}/{x}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: '15',
}).addTo(myMap)


const marker = L.marker([48.87007, 2.346453])
marker.addTo(myMap).bindPopup('<p1><b>The Hoxton, Paris</b></p1>').openPopup()
                                         
[48.863368120198004, 2.3509079846928516]
[48.86933262048345, 2.3542531602919805]
[48.87199261164275, 2.3400569901592183]
[48.86993336274516, 2.3280142476578813] 
[48.86834104280146, 2.330308418109664]



// create red pin marker


// metro station markers



