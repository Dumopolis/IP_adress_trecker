
import { validateIp, getAddress } from './helpers'

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');
document.addEventListener('DOMContentLoaded', initMap(52.6, -2));
const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey)

function getData() {
    //проверка данных
    if (validateIp(ipInput.value)) {
        getAddress(ipInput.value)
            .then(setInfo)

    }
}

function handleKey(event) {
    if (event.key === 'Enter') {
        getData()
    }
}


function initMap(latу, lngу) {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: latу, lng: lngу },
        zoom: 9,
    });
    const infoWindow = new google.maps.InfoWindow();
    window.setTimeout(() => {
        const marker = new google.maps.Marker({
        position: { lat: latу, lng: lngу },
        map: map,
        animation: google.maps.Animation.DROP,
        })
    }, 500)

 
}


function setInfo(mapData) {
    const { lat, lng, country, region, timezone } = mapData.location;
    ipInfo.innerText = mapData.ip;
    locationInfo.innerText = country + '\n' + region;
    timezoneInfo.innerText = '\n' + timezone;
    ispInfo.innerText = mapData.isp;
    initMap(lat, lng)
}
