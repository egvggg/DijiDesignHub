document.addEventListener("DOMContentLoaded", function () {
    const headings = document.querySelectorAll("h2.message__title");
    
    function toggleVisibility(section) {
        const nextElems = [];
        let nextElem = section.nextElementSibling;

        // Добавляем все блоки содержимого до следующего заголовка h2
        while (nextElem && nextElem.tagName !== "H2") {
            nextElems.push(nextElem);
            nextElem = nextElem.nextElementSibling;
        }

        // Переключаем видимость
        nextElems.forEach(elem => {
            elem.style.display = (elem.style.display === "none" || elem.style.display === "") ? "block" : "none";
        });
    }

    headings.forEach(heading => {
        heading.style.cursor = "pointer"; // Указатель при наведении
        heading.addEventListener("click", function () {
            toggleVisibility(heading);
        });
    });

    // При загрузке страницы открываем подпункты для единства
    const unitySubsection = document.querySelector("#unity .subsection");
    if (unitySubsection) {
      unitySubsection.style.display = "block"; // Открытие подпунктов для единства
    }
});
