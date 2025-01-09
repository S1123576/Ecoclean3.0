function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 25.0330, lng: 121.5654 }, // 台北市位置
        zoom: 13
    });

    const truckLocation = { lat: 25.0350, lng: 121.5650 }; // 假設垃圾車的初始位置
    const truckMarker = new google.maps.Marker({
        position: truckLocation,
        map: map,
        title: '垃圾車位置'
    });

    // 模擬垃圾車移動
    setInterval(() => {
        truckLocation.lat += 0.0001;
        truckLocation.lng += 0.0001;
        truckMarker.setPosition(truckLocation);
        map.setCenter(truckLocation);
    }, 2000);
}

// 初始化地圖
window.initMap = initMap;
