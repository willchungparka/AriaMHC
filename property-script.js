// Load the Google Maps JavaScript API with your API key
function loadGoogleMapScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

// Call the function to load the Google Maps API script
loadGoogleMapScript();
// Define an array of marker data
const markersData = [
    {
        position: { lat: 40.0766754, lng: -82.271110 },
        id:'valleylogo',
        title: 'Aira Valley',
        address:'2288 W High St NE, Newark, OH 43055',
        link: './Valley-details.html'

    }
    // Add more marker data as needed
];

// Function to initialize the Google Map
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.0766754, lng: -82.271110 },
        zoom: 10,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
    });

    // Create an info window
    const infoWindow = new google.maps.InfoWindow({
    });

    // Create markers for each item in markersData
    markersData.forEach((markerData) => {
        const marker = new google.maps.Marker({
            position: markerData.position,
            map: map,
            title: markerData.title,
        });
         

        // Add a click event listener to open the info window when the marker is clicked
        // image icon must be added to images/map/icon and named under id.png
        marker.addListener('click', function () {
            infoWindow.setContent(`
            <div id="map-popup">
            <img id= "map-popup-icons" src="./images/mapicons/${markerData.id}.png"/>
            <a href="${markerData.link}" target="_blank" rel="noopener noreferrer">${markerData.address}</a></div>
            `);
            infoWindow.open(map, marker);
        });
    });
}

// Load the Google Maps JavaScript API with your API key
function loadGoogleMapScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

// Call the function to load the Google Maps API script
loadGoogleMapScript();
