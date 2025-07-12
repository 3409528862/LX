document.addEventListener("DOMContentLoaded", function() {
    function updateNav() {
        const navList = document.getElementById('nav-list');
        const registerItem = navList.querySelector('a[href="register.html"]').parentNode;
        if (localStorage.getItem('registered') === 'true') {
            registerItem.style.display = 'none';
        } else {
            registerItem.style.display = 'block';
        }
    }

    updateNav();
});

document.addEventListener("DOMContentLoaded", function() {
    function updateNav() {
        const navList = document.querySelector('nav ul');
        const loginItem = navList.querySelector('a[href="login.html"]').parentNode;
        if (localStorage.getItem('loggedIn') === 'true') {
            loginItem.style.display = 'none';
        } else {
            loginItem.style.display = 'block';
        }
    }

    updateNav();
});