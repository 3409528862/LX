
        document.addEventListener("DOMContentLoaded", function() {
            const editRestaurantForm = document.getElementById('editRestaurantForm');
            editRestaurantForm.addEventListener('submit', function(event) {
                event.preventDefault();
        
                // 直接模拟默认修改成功，不涉及后端交互
                const isSuccess = true;
                alert('修改成功');
                 // 成功后重定向到首页
                 window.location.href = 'index.html';
        
                // if (isSuccess) {
                //     // 使用 SweetAlert2 弹出修改成功的提示框，并在点击确定后返回上一步
                //     Swal.fire({
                //         icon: 'success',
                //         title: '修改成功',
                //         text: '餐厅信息修改成功！',
                //         confirmButtonText: '确定'
                //     }).then(() => {
                //         window.history.back();
                //     });
                // } else {
                //     Swal.fire({
                //         icon: 'error',
                //         title: '修改失败',
                //         text: '修改餐厅信息失败，请重试',
                //         confirmButtonText: '确定'
                //     });
                // }
            });
        });