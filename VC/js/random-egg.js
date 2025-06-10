// 随机显示蛋壳图片的功能
document.addEventListener('DOMContentLoaded', function() {
    // 所有可能的图片路径
    const eggImages = [
        './img/main/eggshell.png',
        './img/main/eggshell01.png',
        './img/main/eggshell02.png',
        './img/main/eggshell03.png',
        './img/main/eggshell04.png',
        './img/main/eggshell05.png'
    ];
    
    // 获取.loader元素并添加点击事件
        const loader = document.querySelector('.loader');
        console.log('Loader element:', loader); // 调试日志
    
        if (loader) {
            loader.addEventListener('click', function() {
                console.log('Loader clicked'); // 调试日志
            
                // 创建.loader-end元素
                const eggElement = document.createElement('div');
                eggElement.className = 'loader-end';
                eggElement.style.display = 'block'; // 确保显示
            
                // 随机选择一个图片索引
                const randomIndex = Math.floor(Math.random() * eggImages.length);
                const imgPath = eggImages[randomIndex];
                console.log('Selected image:', imgPath); // 调试日志
            
                // 设置背景图片
                eggElement.style.backgroundImage = `url(${imgPath})`;
            
                // 先移除已存在的.loader-end
                const existing = document.querySelector('.loader-end');
                if (existing) {
                    existing.remove();
                }
            
                // 安全地添加到DOM
                if (loader.parentNode) {
                    loader.parentNode.insertBefore(eggElement, loader.nextSibling);
                } else {
                    // 如果loader没有父节点，添加到body末尾
                    document.body.appendChild(eggElement);
                    // 调整位置样式
                    eggElement.style.position = 'fixed';
                    eggElement.style.top = '20px';
                    eggElement.style.right = '20px';
                }
                console.log('Element added:', eggElement, 'Parent:', eggElement.parentNode); // 调试日志
            });
        } else {
            console.error('Loader element not found!');
        }
});