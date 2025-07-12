document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;

        // 这里可以添加发送请求到后端的逻辑，例如使用 fetch 或 axios
        // 以下是一个简单的模拟，假设注册成功
        setTimeout(() => {
            // 注册成功，将注册状态存储在 localStorage 中
            localStorage.setItem('registered', 'true');
            alert("注册成功");
            // 重定向到首页
            window.location.href = 'index.html';
        }, 1000);
    });
});