// Простая регистрация
function register() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const registerMessage = document.getElementById('registerMessage');

    // Проверяем, есть ли уже такой пользователь
    if (localStorage.getItem(email)) {
        registerMessage.innerText = 'Email already registered!';
    } else {
        // Сохраняем пользователя в localStorage
        localStorage.setItem(email, password);
        registerMessage.innerText = 'Registration successful! You can now log in.';
    }
}

// Вход в систему
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const loginMessage = document.getElementById('loginMessage');

    // Проверяем, есть ли такой пользователь и правильный ли пароль
    const storedPassword = localStorage.getItem(email);
    if (storedPassword === password) {
        loginMessage.innerText = 'Login successful!';
        // Здесь можно перенаправить пользователя на другую страницу или показать контент
    } else {
        loginMessage.innerText = 'Incorrect email or password.';
    }
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

// Калькулятор
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return;
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = (prev * current) / 100;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}

function sqrt() {
    if (currentInput !== '') {
        currentInput = Math.sqrt(parseFloat(currentInput)).toString();
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput || previousInput || '0';
}


