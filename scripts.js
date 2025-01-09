// Google Maps API 初始化和設置
function initMap() {
    // 創建地圖的中心位置
    const mapCenter = { lat: 25.038, lng: 121.5645 }; // 假設台北市信義區的座標
    const mapOptions = {
        zoom: 13,
        center: mapCenter,
    };

    // 創建地圖物件
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // 假設垃圾車的即時位置
    const garbageTruckLocation = { lat: 25.037, lng: 121.565 }; // 假設位置

    // 標記垃圾車的位置
    const marker = new google.maps.Marker({
        position: garbageTruckLocation,
        map: map,
        title: "垃圾車位置",
    });

    // 模擬垃圾車即時路線，這是假的數據，你應該用API來獲取即時路線
    const routeCoordinates = [
        { lat: 25.037, lng: 121.565 },
        { lat: 25.038, lng: 121.568 },
        { lat: 25.039, lng: 121.570 },
    ];

    // 使用Polyline繪製即時路線折線圖
    const routePath = new google.maps.Polyline({
        path: routeCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 3,
    });
    routePath.setMap(map);
}

// 設定地圖初始化
google.maps.event.addDomListener(window, 'load', initMap);
