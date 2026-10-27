// Отримуємо елементи з DOM
const colorInput = document.getElementById("colorInput");
const changeColorButton = document.getElementById("changeColor");

// Обробник події для кнопки
changeColorButton.addEventListener("click", function () {
    const newColor = colorInput.value.trim();
    
    if (newColor) {
        // Змінюємо фон всієї сторінки
        document.body.style.backgroundColor = newColor;
    }
});