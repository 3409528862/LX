document.addEventListener("DOMContentLoaded", function() {
    // 创建一个新的按钮元素
    const backButton = document.createElement('button');
    backButton.textContent = '返回首页';
    backButton.style.padding = '10px 20px';
    backButton.style.backgroundColor = '#4CAF50';
    backButton.style.color = 'white';
    backButton.style.border = 'none';
    backButton.style.borderRadius = '5px';
    backButton.style.cursor = 'pointer';
    backButton.style.margin = '10px';

    // 为按钮添加点击事件监听器，点击后跳转到首页
    backButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // 将按钮添加到页面的主体部分
    const main = document.querySelector('main');
    main.appendChild(backButton);

    // 可以添加更多的布局和样式美化代码
    main.style.backgroundColor = '#f0f0f0';
    main.style.padding = '20px';
    main.style.textAlign = 'center';
    main.style.borderRadius = '10px';
    main.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
});