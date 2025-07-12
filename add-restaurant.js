
document.addEventListener("DOMContentLoaded", function() {
    const addRestaurantForm = document.getElementById('addRestaurantForm');
    addRestaurantForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // 模拟默认添加成功
        const isSuccess = true;
        alert('添加成功');
        // 成功后重定向到首页
        window.location.href = 'index.html';

        // if (isSuccess) {
        //     // 使用 SweetAlert2 弹出添加成功的提示框，并在点击确定后跳转至首页
        //     Swal.fire({
        //         icon: 'success',
        //         title: '添加成功',
        //         text: '餐厅信息添加成功！',
        //         confirmButtonText: '确定'
        //     }).then(() => {
        //         window.location.href = 'index.html';
        //     });
        // } else {
        //     Swal.fire({
        //         icon: 'error',
        //         title: '添加失败',
        //         text: '添加餐厅信息失败，请重试',
        //         confirmButtonText: '确定'
        //     });
        // }
    });
});