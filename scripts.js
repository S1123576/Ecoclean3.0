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

// 切換語言
function switchLanguage(lang) {
    const translations = {
        zh: {
            heroTitle: "到府收垃圾服務",
            heroDescription: "輕鬆解決垃圾清運的煩惱，享受更便利的生活",
            heroBtn: "立即預約",
            servicesTitle: "我們的服務",
            servicesDescription: "提供即時上門收垃圾服務，解決現代人因忙碌無法配合垃圾車時間的煩惱，特別適合長者及行動不便者。",
            bookingBtn: "立即預約",
            trackingTitle: "即時追蹤垃圾車",
            trackingDescription: "查看垃圾車的即時位置，讓您準備好交接垃圾。",
        },
        en: {
            heroTitle: "Door-to-Door Garbage Collection",
            heroDescription: "Easily solve garbage disposal problems and enjoy a more convenient life.",
            heroBtn: "Book Now",
            servicesTitle: "Our Services",
            servicesDescription: "We offer garbage collection services at your doorstep, perfect for busy people or those with mobility issues.",
            bookingBtn: "Book Now",
            trackingTitle: "Real-Time Garbage Truck Tracking",
            trackingDescription: "Check the real-time location of the garbage truck and prepare for the handover.",
        },
    };

    const content = translations[lang];
    document.getElementById("hero-title").innerText = content.heroTitle;
    document.getElementById("hero-description").innerText = content.heroDescription;
    document.getElementById("hero-btn").innerText = content.heroBtn;
    document.getElementById("services-title").innerText = content.servicesTitle;
    document.getElementById("services-description").innerText = content.servicesDescription;
    document.getElementById("booking-btn").innerText = content.bookingBtn;
    document.getElementById("tracking-title").innerText = content.trackingTitle;
    document.getElementById("tracking-description").innerText = content.trackingDescription;
}

// 初始化地圖
window.onload = initMap;
