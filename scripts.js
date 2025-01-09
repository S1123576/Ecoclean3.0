// 初始化地圖和垃圾車標記
let map, garbageTruckMarker;

function initMap() {
    const initialPosition = { lat: 25.033964, lng: 121.564468 }; // 台北101位置

    try {
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
    } catch (error) {
        console.error("初始化地圖時發生錯誤：", error);
        alert("地圖加載失敗，請檢查網絡或 API 金鑰設置。");
    }
}

// 模擬更新垃圾車位置
document.getElementById("update-location").addEventListener("click", () => {
    try {
        // 隨機生成新的位置
        const newLat = garbageTruckMarker.getPosition().lat() + (Math.random() - 0.5) * 0.01;
        const newLng = garbageTruckMarker.getPosition().lng() + (Math.random() - 0.5) * 0.01;

        const newPosition = { lat: newLat, lng: newLng };

        // 更新垃圾車標記位置
        garbageTruckMarker.setPosition(newPosition);
        map.setCenter(newPosition);
    } catch (error) {
        console.error("更新垃圾車位置時發生錯誤：", error);
        alert("更新垃圾車位置失敗，請稍後重試。");
    }
});

// 在頁面加載時初始化地圖
window.onload = initMap;
