let dynamicIslandTimer = null;

function showDynamicIsland(message, type = 'info') {
	const island = document.getElementById('dynamicIsland');
	const text = document.getElementById('dynamicIslandText');
	const progress = document.getElementById('dynamicIslandProgress');
	const iconSvg = document.getElementById('dynamicIslandIconSvg');

	// 清除之前的定时器
	if (dynamicIslandTimer) {
		clearTimeout(dynamicIslandTimer);
	}

	// 设置类型和消息
	island.className = 'dynamic-island ' + type;
	text.textContent = message;

	// 设置图标
	if (type === 'success') {
		iconSvg.innerHTML = '<polyline points="20 6 9 17 4 12"></polyline>';
	} else if (type === 'error') {
		iconSvg.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
	} else {
		iconSvg.innerHTML = '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>';
	}

	// 重置进度条动画
	progress.style.animation = 'none';
	progress.offsetHeight; // 触发重绘
	progress.style.animation = 'progress 3s linear forwards';

	// 显示
	island.classList.remove('hide');
	island.classList.add('show');

	// 3秒后隐藏
	dynamicIslandTimer = setTimeout(() => {
		island.classList.remove('show');
		island.classList.add('hide');
	}, 3000);
}

// 页面加载完成后检查是否有消息需要显示
document.addEventListener('DOMContentLoaded', function() {
	// 从 URL 参数获取消息
	const urlParams = new URLSearchParams(window.location.search);
	const successMsg = urlParams.get('success');
	const errorMsg = urlParams.get('error');

	if (successMsg) {
		showDynamicIsland(decodeURIComponent(successMsg), 'success');
		// 清除 URL 参数
		window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
	}

	if (errorMsg) {
		showDynamicIsland(decodeURIComponent(errorMsg), 'error');
		// 清除 URL 参数
		window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
	}
});
