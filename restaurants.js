document.addEventListener("DOMContentLoaded", function() {
    fetch('/api/restaurants')
     .then(response => response.json())
     .then(data => {
            const restaurantList = document.getElementById('restaurantList');
            data.forEach(restaurant => {
                const li = document.createElement('li');
                li.textContent = restaurant.name;
                restaurantList.appendChild(li);
            });
        })
     .catch(error => console.error('Error fetching restaurants:', error));
});