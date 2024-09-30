// Находим элемент хомяка
const hamster = document.getElementById('hamster');

// Устанавливаем размеры экрана
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Функция для случайного перемещения хомяка
function moveHamster() {
    // Случайное место для хомяка
    const randomX = Math.floor(Math.random() * (screenWidth - hamster.offsetWidth));
    const randomY = Math.floor(Math.random() * (screenHeight - hamster.offsetHeight));

    // Устанавливаем новое положение хомяка
    hamster.style.left = `${randomX}px`;
    hamster.style.top = `${randomY}px`;

    // Повторяем движение хомяка каждые 0.5-2 секунды
    const randomInterval = Math.random() * 1500 + 500;
    setTimeout(moveHamster, randomInterval);
}

// Запускаем перемещение хомяка при загрузке страницы
window.onload = moveHamster;
