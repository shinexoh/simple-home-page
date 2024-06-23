addLinks();
loadTheme();
addToggleThemeEvent();
listenSystemTheme();

// 添加社交媒体链接
function addLinks() {
    const links = document.getElementsByClassName('links');
    const myLinks = [
        'https://github.com/shinexoh',
        'https://youtube.com/@shinexoh',
        'https://x.com/shinexoh',
        'https://instagram.com/shinexoh',
        'https://open.spotify.com/user/84shedgmvmjwtghc7vebfgjeu'
    ]
    for (let i = 0; i < links[0].children.length; i++) {
        const element = links[0].children[i];
        element.setAttribute('href', myLinks[i]);
        element.setAttribute('target', '_blank');
    }
}

// 添加切换主题按钮事件
function addToggleThemeEvent() {
    const toggleTheme = document.getElementById('toggle-theme');
    const body = document.body;
    toggleTheme.addEventListener('click', () => {
        let dark = toggleTheme.className === 'ri-sun-line';
        if (dark) {
            toggleTheme.className = 'ri-moon-line';
            body.classList.remove('dark-mode');
            localStorage.setItem('theme-mode', 'light');
        } else {
            toggleTheme.className = 'ri-sun-line';
            body.classList.toggle('dark-mode');
            localStorage.setItem('theme-mode', 'dark');
        }
    })
}

// 加载主题
function loadTheme() {
    const themeMode = localStorage.getItem('theme-mode');
    const toggleTheme = document.getElementById('toggle-theme');
    const body = document.body;
    if (themeMode !== null) {
        if (themeMode === 'dark') {
            toggleTheme.className = 'ri-sun-line';
            body.classList.toggle('dark-mode');
        } else {
            toggleTheme.className = 'ri-moon-line';
            body.classList.remove('dark-mode');
        }
    } else {
        systemTheme();
    }
}

// 根据系统主题设置
function systemTheme() {
    if (!window.matchMedia) return;

    const toggleTheme = document.getElementById('toggle-theme');
    const body = document.body;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleTheme.className = 'ri-sun-line';
        body.classList.toggle('dark-mode');
    } else {
        toggleTheme.className = 'ri-moon-line';
        body.classList.remove('dark-mode');
    }
}

// 监听系统主题设置变化
function listenSystemTheme() {
    if (localStorage.getItem('theme-mode') !== null) return;
    if (!window.matchMedia) return;

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', v => {
        if (localStorage.getItem('theme-mode') !== null) return;

        const toggleTheme = document.getElementById('toggle-theme');
        const body = document.body;
        if (v.matches) {
            toggleTheme.className = 'ri-sun-line';
            body.classList.toggle('dark-mode');
        } else {
            toggleTheme.className = 'ri-moon-line';
            body.classList.remove('dark-mode');
        }
    })
}