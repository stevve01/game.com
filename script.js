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
