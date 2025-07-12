document.addEventListener("DOMContentLoaded", function() {
    const addRestaurantBtn = document.getElementById('addRestaurantBtn');
    const editRestaurantBtn = document.getElementById('editRestaurantBtn');
    const deleteRestaurantBtn = document.getElementById('deleteRestaurantBtn');
    const viewUserInfoBtn = document.getElementById('viewUserInfoBtn');

    addRestaurantBtn.addEventListener('click', function() {
        // 跳转到添加餐厅页面
        window.location.href = 'add-restaurant.html';
    });

    editRestaurantBtn.addEventListener('click', function() {
        // 跳转到修改餐厅信息页面
        window.location.href = 'edit-restaurant.html';
    });

    deleteRestaurantBtn.addEventListener('click', function() {
        // 跳转到删除餐厅页面
        window.location.href = 'delete-restaurant.html';
    });

    viewUserInfoBtn.addEventListener('click', function() {
        // 跳转到查看用户信息页面
        window.location.href = 'user-info.html';
    });
});