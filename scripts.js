// 初始化地圖和標記
let map, garbageTruckMarker;

function initMap() {
    const initialPosition = { lat: 25.033964, lng: 121.564468 }; // 台北 101 位置

    // 初始化地圖
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: initialPosition,
    });

    // 添加垃圾車標記
    garbageTruckMarker = new google.maps.Marker({
        position: initialPosition,
        map: map,
        title: "垃圾車位置",
        icon: {
            url: "https://maps.google.com/mapfiles/kml/shapes/truck.png",
            scaledSize: new google.maps.Size(50, 50),
        },
    });
}

// 模擬更新垃圾車位置
document.getElementById("update-location").addEventListener("click", () => {
    const newLat = garbageTruckMarker.getPosition().lat() + (Math.random() - 0.5) * 0.01;
    const newLng = garbageTruckMarker.getPosition().lng() + (Math.random() - 0.5) * 0.01;

    const newPosition = { lat: newLat, lng: newLng };
    garbageTruckMarker.setPosition(newPosition);
    map.setCenter(newPosition);
});


// 初始化地圖
window.onload = initMap;
