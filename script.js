* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    background: url('https://cdn.pixabay.com/photo/2018/07/28/10/30/landscape-3564149_1280.png') no-repeat center center fixed; /* Мультяшный фон */
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.game-section {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    padding: 40px;
    text-align: center;
    width: 400px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

#score {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
}

.game-btn {
    padding: 15px 30px;
    font-size: 1.5rem;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.1s ease;
}

.game-btn:hover {
    background-color: #218838;
}

.game-btn:active {
    transform: scale(0.95); /* Анимация нажатия кнопки */
}

.shop {
    margin-top: 30px;
}

.shop h2 {
    margin-bottom: 10px;
    font-size: 1.8rem;
    color: #333;
}

.shop-btn {
    display: block;
    margin: 10px 0;
    padding: 10px 20px;
    font-size: 1.2rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.shop-btn:hover {
    background-color: #0056b3;
}

.danger-btn {
    background-color: #dc3545;
}

.danger-btn:hover {
    background-color: #c82333;
}
