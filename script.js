// Счётчик кликов
let score = 0;

// Когда нажимаешь на кнопку, увеличивается счётчик
document.getElementById('click-btn').addEventListener('click', function() {
    score++; // Увеличиваем счётчик на 1
    document.getElementById('score').innerText = `Score: ${score}`; // Обновляем текст на экране
});
