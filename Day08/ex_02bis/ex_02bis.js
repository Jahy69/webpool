document.addEventListener('DOMContentLoaded', function () {

    var map = L.map('epitechMap').setView([46.603354, 1.888334], 6); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    var epitechIcon = L.icon({
        iconUrl: 'https://www.pngkit.com/png/detail/459-4596239_epitech-epitech-logo-transparent.png',
        iconSize: [38, 50], 
        iconAnchor: [19, 38],
        popupAnchor: [0, -40]
    });

    var schools = [
        { name: "Paris", coords: [48.8566, 2.3522] },
        { name: "Lyon", coords: [45.7640, 4.8357] },
        { name: "Bordeaux", coords: [44.8378, -0.5792] },
        { name: "Nantes", coords: [47.2184, -1.5536] },
        { name: "Toulouse", coords: [43.6045, 1.4442] }
    ];

    schools.forEach(function (school) {
        L.marker(school.coords, { icon: epitechIcon })
            .addTo(map)
            .bindPopup(school.name + ' rocks!')
            .bindTooltip(school.name, { permanent: true });
    });
});
