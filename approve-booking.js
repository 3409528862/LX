document.addEventListener("DOMContentLoaded", function() {
    const bookingList = document.getElementById('bookingList');

    // 模拟的预约数据
    let bookings = [
        { id: 1, userId: 1, restaurantId: 1, seatId: 1, status: "待审核" },
        { id: 2, userId: 2, restaurantId: 2, seatId: 2, status: "待审核" }
    ];

    bookings.forEach(booking => {
        const li = document.createElement('li');
        li.textContent = `预约ID: ${booking.id}, 用户ID: ${booking.userId}, 餐厅ID: ${booking.restaurantId}, 座位ID: ${booking.seatId}, 状态: ${booking.status}`;

        const approveBtn = document.createElement('button');
        approveBtn.textContent = '接受预约';
        approveBtn.addEventListener('click', function() {
            // 模拟接受预约成功
            booking.status = "已接受";
            alert('预约已接受');
            // 更新界面显示
            updateBookingList();
        });

        const rejectBtn = document.createElement('button');
        rejectBtn.textContent = '拒绝预约';
        rejectBtn.addEventListener('click', function() {
            // 模拟拒绝预约成功
            booking.status = "已拒绝";
            alert('预约已拒绝');
            // 更新界面显示
            updateBookingList();
        });

        li.appendChild(approveBtn);
        li.appendChild(rejectBtn);
        bookingList.appendChild(li);
    });

    function updateBookingList() {
        // 清空原有列表
        bookingList.innerHTML = "";
        // 重新渲染更新后的预约列表
        bookings.forEach(booking => {
            const li = document.createElement('li');
            li.textContent = `预约ID: ${booking.id}, 用户ID: ${booking.userId}, 餐厅ID: ${booking.restaurantId}, 座位ID: ${booking.seatId}, 状态: ${booking.status}`;

            const approveBtn = document.createElement('button');
            approveBtn.textContent = '接受预约';
            approveBtn.addEventListener('click', function() {
                booking.status = "已接受";
                alert('预约已接受');
                updateBookingList();
            });

            const rejectBtn = document.createElement('button');
            rejectBtn.textContent = '拒绝预约';
            rejectBtn.addEventListener('click', function() {
                booking.status = "已拒绝";
                alert('预约已拒绝');
                updateBookingList();
            });

            li.appendChild(approveBtn);
            li.appendChild(rejectBtn);
            bookingList.appendChild(li);
        });
    }
});