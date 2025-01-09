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
        p.textContent = ${key}: ${data[key]};
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
