document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // 这里可以添加登录验证逻辑，例如发送请求到后端进行验证
        // 以下为默认登录成功的处理
        loginSuccess();
    });

    function loginSuccess() {
        // 存储登录状态到 localStorage
        localStorage.setItem('loggedIn', 'true');
        // 弹出登录成功的提示框
        alert('登录成功');
        // 登录成功后重定向到首页
        window.location.href = 'index.html';
    }
});