/// <reference path="jquery-3.1.1.js" />

var watchId = 0;

$(document).ready(function () {
    getLocation();
});

function getLocation() {
    if (supportLocation) {
        watchId = navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
    else {
        showMessage("Geolocation is not supported by this browser.");
    }
}

function supportLocation() {
    return 'geolocation' in navigator;
}

function showPosition(position) {
    var mapcanvas = document.getElementById('map');
    var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var options = {
        zoom: 13,
        center: coords,
        mapTypeControl: false,
        navigationControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapcanvas, options);
    var marker = new google.maps.Marker({
        position: coords,
        map: map,
        title: 'You are here!'
    });
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            showMessage("User denied Geolocation access request.");
            break;
        case error.POSITION_UNAVAILABLE:
            showMessage("Location information unavailable.");
            break;
        case error.UNKNOWN_ERROR:
            showMessage("An unknwon error occured.");
            break;
    }
}

function showMessage(message) {
    $('#message').html(message);
}