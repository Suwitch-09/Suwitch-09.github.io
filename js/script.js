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



    const honor01 = document.querySelector('.honor01');
    const honor01div = document.querySelector('.honor01div');

    // 按钮点击切换显示/隐藏
    honor01.addEventListener('click', function(e) {
    e.stopPropagation();
    const computedStyle = window.getComputedStyle(honor01div);
    honor01div.style.display = computedStyle.display === 'none' ? 'block' : 'none';
    });

    // 点击弹窗外部（任意位置）隐藏弹窗
    document.addEventListener('click', function() {
      honor01div.style.display = 'none';
    });

    // 点击弹窗内部时阻止冒泡
    honor01div.addEventListener('click', function(e) {
      e.stopPropagation();
    });

    const honor02 = document.querySelector('.honor02');
    const honor02div = document.querySelector('.honor02div');

    // 按钮点击切换显示/隐藏
    honor02.addEventListener('click', function(e) {
    e.stopPropagation();
    const computedStyle = window.getComputedStyle(honor02div);
    honor02div.style.display = computedStyle.display === 'none' ? 'block' : 'none';
    });

    // 点击弹窗外部（任意位置）隐藏弹窗
    document.addEventListener('click', function() {
      honor02div.style.display = 'none';
    });

    // 点击弹窗内部时阻止冒泡
    honor02div.addEventListener('click', function(e) {
      e.stopPropagation();
    });