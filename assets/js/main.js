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

// Template 弹窗逻辑
const templateBtn = document.getElementById('templateBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
templateBtn.addEventListener('click', () => {
	modalOverlay.classList.add('show');
});
modalClose.addEventListener('click', () => {
	modalOverlay.classList.remove('show');
});
modalOverlay.addEventListener('click', (e) => {
	if (e.target === modalOverlay) {
		modalOverlay.classList.remove('show');
	}
});

// 51.la
!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"LBIBZuhCMUA40fBG",ck:"LBIBZuhCMUA40fBG",autoTrack:true,hashMode:true,screenRecord:true});