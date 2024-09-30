// Калькулятор
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Please enter valid numbers!';
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num1 / num2;
                break;
            default:
                result = 'Unknown operation';
        }
    }

    document.getElementById('calcResult').innerText = `Result: ${result}`;
}

// Открытие и закрытие модальных окон
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Часы и будильник
function updateTime() {
    const time = new Date();
    document.getElementById('time').innerText = time.toLocaleTimeString();
    setTimeout(updateTime, 1000);
}

function setAlarm() {
    const alarmTime = document.getElementById('alarmTime').value;
    const currentTime = new Date();
    const alarmMessage = document.getElementById('alarmMessage');

    if (alarmTime) {
        const [hours, minutes] = alarmTime.split(':');
        const alarmDate = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), hours, minutes);

        const timeToAlarm = alarmDate - currentTime;

        if (timeToAlarm > 0) {
            alarmMessage.innerText = `Alarm set for ${alarmTime}`;
            setTimeout(() => {
                alarmMessage.innerText = 'Wake up!';
                alert('Wake up!');
            }, timeToAlarm);
        } else {
            alarmMessage.innerText = 'Alarm time must be in the future!';
        }
    } else {
        alarmMessage.innerText = 'Please set a valid alarm time!';
    }
}

updateTime(); // Запуск часов

// Таймер обратного отсчёта
let timerInterval;

function startTimer() {
    const minutes = parseInt(document.getElementById('minutes').value);
    const timerDisplay = document.getElementById('timerDisplay');
    
    if (isNaN(minutes) || minutes < 0) {
        timerDisplay.innerText = 'Please enter a valid number of minutes';
        return;
    }

    let timeLeft = minutes * 60;

    timerInterval = setInterval(() => {
        const minutesLeft = Math.floor(timeLeft / 60);
        const secondsLeft = timeLeft % 60;
        timerDisplay.innerText = `Time left: ${minutesLeft}:${secondsLeft < 10 ? '0' + secondsLeft : secondsLeft}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Time\'s up!');
        }

        timeLeft--;
    }, 1000);
}

// Генератор шуток
const jokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!"
];

function getJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById('jokeDisplay').innerText = jokes[randomIndex];
}

// Геолокация
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById('locationDisplay').innerText = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const { latitude, longitude } = position.coords;
    document.getElementById('locationDisplay').innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;
}

// Генерация QR-кода
function generateQRCode() {
    const qrInput = document.getElementById('qrInput').value;
    const qrCodeContainer = document.getElementById('qrCode');

    if (!qrInput) {
        qrCodeContainer.innerHTML = 'Please enter text for QR code.';
        return;
    }

    const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrInput)}`;
    qrCodeContainer.innerHTML = `<img src="${qrCodeURL}" alt="QR Code">`;
}

// Переключение темы
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Контактная форма
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formMessage').innerText = 'Thank you for your message!';
        // Здесь можно отправить данные формы на сервер
    } else {
        document.getElementById('formMessage').innerText = 'Please fill out all fields!';
    }
});
