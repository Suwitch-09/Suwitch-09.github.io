function updateTime() {
    const now = new Date();
    const format = (time) => time.toString().padStart(2, '0');
    document.getElementById('nowtime').textContent = 
        `${format(now.getHours())}:${format(now.getMinutes())}:${format(now.getSeconds())}`;
}

function updateDay() {
    const now = new Date();
    const format = (time) => time.toString().padStart(2, '0');
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekday = weekdays[now.getDay()]; // 获取星期几
    document.getElementById('nowday').textContent = 
        `${now.getFullYear()}-${format(now.getMonth() + 1)}-${format(now.getDate())} ${weekday}`;
}

// 初始化
updateTime();
updateDay();
setInterval(updateTime, 1000);

// 精确的跨天更新
function scheduleMidnightUpdate() {
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    const delay = midnight - now;
    setTimeout(() => {
        updateDay();
        scheduleMidnightUpdate(); // 递归调度
    }, delay);
}
scheduleMidnightUpdate();