// 表單提交處理
document.querySelector('#booking-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // 收集表單資料
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // 儲存至 LocalStorage 或傳遞至確認頁面
    localStorage.setItem('bookingData', JSON.stringify(data));
    window.location.href = 'confirmation.html';
});

// 資料確認頁面處理
if (window.location.pathname.includes('confirmation.html')) {
    const data = JSON.parse(localStorage.getItem('bookingData'));
    const detailsContainer = document.getElementById('confirmation-details');

    Object.keys(data).forEach(key => {
        const p = document.createElement('p');
        p.textContent = `${key}: ${data[key]}`;
        detailsContainer.appendChild(p);
    });

    document.getElementById('confirm-booking').addEventListener('click', function () {
        alert('預約成功！郵件已寄出。');
        localStorage.removeItem('bookingData');
        window.location.href = 'index.html';
    });

    document.getElementById('edit-booking').addEventListener('click', function () {
        window.location.href = 'schedule.html';
    });
}
// 中英文切換
document.getElementById('language-toggle').addEventListener('click', function () {
    const currentLang = this.textContent === 'EN' ? '中文' : 'EN';
    this.textContent = currentLang;

    document.querySelectorAll('[data-lang]').forEach(el => {
        el.textContent = translations[currentLang][el.dataset.lang];
    });
});

const translations = {
    EN: {
        '首頁': 'Home',
        '關於我們': 'About Us',
        '我的預約': 'My Booking',
        '立即預約': 'Schedule Now',
        '內容創新的清運方式': 'Innovative Garbage Removal',
        '讓垃圾清運變得簡單無比': 'Make Garbage Collection Simple',
    },
    中文: {
        'Home': '首頁',
        'About Us': '關於我們',
        'My Booking': '我的預約',
        'Schedule Now': '立即預約',
        'Innovative Garbage Removal': '內容創新的清運方式',
        'Make Garbage Collection Simple': '讓垃圾清運變得簡單無比',
    }
};

// 預約表單處理
document.querySelector('#booking-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    localStorage.setItem('bookingData', JSON.stringify(data));
    window.location.href = 'booking.html';
});

// 預約頁面加載內容
if (window.location.pathname.includes('booking.html')) {
    const bookingData = JSON.parse(localStorage.getItem('bookingData'));
    const bookingDetails = document.getElementById('booking-details');
    Object.keys(bookingData).forEach(key => {
        const p = document.createElement('p');
        p.textContent = `${key}: ${bookingData[key]}`;
        bookingDetails.appendChild(p);
    });
    initMap();
}

function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 25.0330, lng: 121.5654 },
        zoom: 13
    });

    const garbageTruckPath = new google.maps.Polyline({
        path: [
            { lat: 25.0330, lng: 121.5654 },
            { lat: 25.0340, lng: 121.5660 },
            { lat: 25.0350, lng: 121.5670 },
        ],
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });

    garbageTruckPath.setMap(map);
}
