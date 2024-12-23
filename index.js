
document.addEventListener("DOMContentLoaded", function() {
    const infoblock = document.getElementById("infoblock");
    const additionalContent = infoblock.querySelector(".additional__content");

    // Добавляем обработчик клика на блок
    infoblock.addEventListener("click", function() {
        additionalContent.classList.toggle("show"); // Переключаем класс show
    });
});


