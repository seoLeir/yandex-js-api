ymaps.ready(function () {
    ymaps.option.Manager.set({
        // Выбор светлой или темной темы в зависимости от системных настроек
        theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    });

    // Получение текущей локации пользователя
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            // Инициализация карты с полученными координатами
            initMap([latitude, longitude]);
        });
    } else {
        // Если геолокация недоступна, инициализируйте карту с координатами по умолчанию
        initMap([55.76, 37.64]);
    }
});

var myMap, myPlacemark;

function initMap(centerCoordinates) {
    myMap = new ymaps.Map("map", {
        center: centerCoordinates,
        zoom: 7,
        controls: ['geolocationControl', 'fullscreenControl']
    });

    myPlacemark = new ymaps.Placemark(centerCoordinates, {
        hintContent: 'Ваше местоположение',
        balloonContent: 'Вы здесь'
    });

    myMap.geoObjects.add(myPlacemark);
}
