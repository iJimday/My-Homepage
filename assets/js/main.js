// 自动年份
document.getElementById('year').textContent = new Date().getFullYear();

// 自动判断浏览器深色模式
const userTheme = localStorage.getItem('darkMode');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// 自动匹配系统主题
if (userTheme === null && systemDark) {
	document.documentElement.classList.add('dark-mode');
	localStorage.setItem('darkMode', 'true');
}

// 深色模式切换
const themeToggle = document.getElementById('themeToggle');
const tooltip = document.querySelector('.avatar-tooltip');

// 初始化主题
function initTheme() {
	const isDark = localStorage.getItem('darkMode') === 'true';
	if (isDark) {
		document.documentElement.classList.add('dark-mode');
		tooltip.textContent = '点击切换浅色模式';
	}
}
initTheme();

// 切换主题
themeToggle.addEventListener('click', () => {
	const isDark = document.documentElement.classList.toggle('dark-mode');
	localStorage.setItem('darkMode', isDark);
	tooltip.textContent = isDark ? '点击切换浅色模式' : '点击切换深色模式';
});