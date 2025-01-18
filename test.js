const tests = [
    {   
        title: "Единство",
        question: "Вопрос 1",
        images: [
            {
                src: "images/unity1_1.jpg",
                correct: true,
                message: "Да! Единство здесь достигается за счёт единого стиля и цветовой гаммы",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/uniti1_2.jpg",
                correct: false,
                message: "Нет, фигуры отделены друг от друга и не создают единого целого",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/unity1_3.jpg",
                correct: false,
                message: "Нет, объекты разной формы и размера, которые также не объединены в целостное изображение",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/unity1_4.jpg",
                correct: false,
                message: "Нет, кружок изолирован, и не образует единства с остальными элементами",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {   
        title: "Единство",
        question: "Вопрос 2",
        images: [
            {
                src: "images/unity2_1.jpg",
                correct: false,
                message: "Нет, элементы различаются по размерам и формам",
                footerColor: "#4EFF84",
                icon: "images/icon1.svg"
            },
            {
                src: "images/unity2_2.jpg",
                correct: false,
                message: "Нет, хотя элементы квадратные, их расположение и размеры создают впечатление хаоса, без четкой организационной структуры",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/unity_3.jpg",
                correct: true,
                message: "Да! Все круги имеют одинаковый стиль и размер",
                footerColor: "#FF4E51",
                icon: "images/icon.svg"
            },
            {
                src: "images/unity2_4.jpg",
                correct: false,
                message: "Нет, один большой круг и маленькие квадраты не связаны по стилю и размеру",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {   
        title: "Баланс",
        question: "Вопрос 3",
        images: [
            {
                src: "images/balance1_1.jpg",
                correct: false,
                message: "Нет, xотя формы одинаковые, их размещение вызывает ощущение тяжести с одной стороны, что нарушает общий баланс",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/balance1_2.jpg",
                correct: true,
                message: "Да! Здесь элементы расположены симметрично, что создает визуальное равновесие",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/balance1_3.jpg",
                correct: false,
                message: "Нет, неравномерное размещение элементов создает ощущение неустойчивости, что нарушает баланс",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/balance1_4.jpg",
                correct: false,
                message: "Нет, это просто сплошной темный фон с белым прямоугольником",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {   
        title: "Баланс",
        question: "Вопрос 4",
        images: [
            {
                src: "images/balance2_1.jpg",
                correct: false,
                message: "Нет, небольшой квадрат в верхней части изображения нарушает визуальный баланс и симметрию",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/balance2_2.jpg",
                correct: true,
                message: "Да! Центральная шестиугольная форма уравновешена двумя боковыми круглыми формами",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/balance2_3.jpg",
                correct: false,
                message: "Нет, разнообразие геометрических форм и их нерегулярное расположение приводят к ощущению визуального дисбаланса",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/balance2_4.jpg",
                correct: false,
                message: "Нет, это просто сплошной темный фон с белым прямоугольником",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {   
        title: "Ритм",
        question: "Вопрос 5",
        images: [
            {
                src: "images/rhythm1_1.jpg",
                correct: true,
                message: "Да! Размещение квадратов в шахматном порядке создает четкий ритм",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/rhythm1_2.jpg",
                correct: false,
                message: "Нет, хотя фигура шестиугольника повторяется дважды, общая композиция не демонстрирует сильного ритмического ощущения",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/rhythm1_3.jpg",
                correct: false,
                message: "Нет, разнообразие геометрических форм и их асимметричное расположение не создают повторяющегося ритмического рисунка",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/rhythm1_4.jpg",
                correct: false,
                message: "Нет, композиция из прямоугольника и круга не несет четкого ритма",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {   
        title: "Ритм",
        question: "Вопрос 6",
        images: [
            {
                src: "images/rhythm2_1.jpg",
                correct: true,
                message: "Да! Четкий ритм, образованный повторяющимися геометрическими формами, равномерно распределенными по всему пространству",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/rhythm2_2.jpg",
                correct: false,
                message: "Нет, хотя шестиугольная форма повторяется, ее расположение вместе с круглыми формами не создает столь четкого ритма",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/rhythm2_3.jpg",
                correct: false,
                message: "Нет, вертикальные полосы разной ширины, создают ощущение некоторой динамики, но без четкого ритма",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/rhythm2_4.jpg",
                correct: false,
                message: "Нет, здесь нет повторяющихся элементов, создающих ощущение ритма",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {   
        title: "Пропорции",
        question: "Вопрос 7",
        images: [
            {
                src: "images/proportions1_1.jpg",
                correct: false,
                message: "Нет, большой элемент привлекает слишком много внимания, в то время как маленькая полоска кажется неуместной и недостаточно значимой",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/proportions1_2.jpg",
                correct: false,
                message: "Нет,  большой элемент привлекает основное внимание, тогда как маленький ромб выглядит незначительным и теряется на фоне",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/proportions1_3.jpg",
                correct: false,
                message: "Нет, заголовок выглядит «потерянным» на фоне кругов, круги отвлекают внимание от текста",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/proportions1_4.jpg",
                correct: true,
                message: "Да! Это изображение демонстрирует принцип золотого сечения, где прямоугольники последовательно уменьшаются в определенной пропорции",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {   
        title: "Пространство",
        question: "Вопрос 8",
        images: [
            {
                src: "images/freeplace1_1.jpg",
                correct: false,
                message: 'Нет, пространство полностью заполнено прямоугольниками. Нет "воздуха"',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/freeplace1_2.jpg",
                correct: false,
                message: 'Нет, пространство полностью заполнено прямоугольниками. Нет "воздуха"',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/freeplace1_3.png",
                correct: false,
                message: 'Нет, пространство полностью заполнено прямоугольниками. Нет "воздуха"',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/freeplace1_4.jpg",
                correct: true,
                message:  message = 'Да! Большая часть композиции оставлена пустой. "Воздух" в дизайне позволяет элементам "дышать"',
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {   
        title: "Пространство",
        question: "Вопрос 9",
        images: [
            {
                src: "images/freeplace2_1.jpg",
                correct: false,
                message: 'Нет, пространство полностью заполнено прямоугольниками. Нет "воздуха"',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/freeplace2_2.jpg",
                correct: true,
                message: 'Да! Большая часть композиции оставлена пустой. "Воздух" в дизайне позволяет элементам "дышать"',
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/freeplace2_3.jpg",
                correct: false,
                message: 'Нет, пространство полностью заполнено прямоугольниками. Нет "воздуха"',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/freeplace2_4.jpg",
                correct: false,
                message:  message = 'Нет, пространство полностью заполнено прямоугольниками. Нет "воздуха"',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {   
        title: "Иерархия",
        question: "Вопрос 10",
        images: [
            {
                src: "images/hierarchy2_1.jpg",
                correct: true,
                message: "Да! Прямоугольники разных размеров отображают иерархию: самый большой — верхний уровень, средние — подчиненные уровни, а наименьшие — низшие элементы",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/hierarchy2_2.jpg",
                correct: false,
                message: "Нет, нет прямоугольники расположены хаотично",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/hierarchy2_3.jpg",
                correct: false,
                message: "Нет, разные по размеру прямоугольники расположены хаотично. Нет четкой визуальной иерархии",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/hierarchy2_4.jpg",
                correct: false,
                message: "Нет, четыре одинаковых по размеру прямоугольника не создают иерархию",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {    title: "Иерархия",
        question: "Вопрос 11",
        images: [
            {
                src: "images/hierarchy1_1.jpg",
                correct: false,
                message: "Нет, это просто набор различных геометрических фигур",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/hierarchy1_2.jpg",
                correct: true,
                message: "Да! Верхний, наиболее крупный прямоугольник выступает как главный элемент. Ниже расположены более мелкие прямоугольники",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/hierarchy1_3.jpg",
                correct: false,
                message: "Нет, это просто набор разных по размеру прямоугольников, расположенных хаотично",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/hierarchy1_4.jpg",
                correct: false,
                message:  message = "Нет, это просто большой прямоугольник",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    }, 
    {    title: "Акцент",
        question: "Вопрос 12",
        images: [
            {
                src: "images/accent1_1.jpg",
                correct: false,
                message: "Нет, это просто овалы разного размера",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/accent1_2.jpg",
                correct: false,
                message: "Нет, это просто набор разнных прямоугольников, без выделения какого-либо элемента",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/accent1_3.jpg",
                correct: false,
                message: "Нет, это просто набор разнных прямоугольников, без выделения какого-либо элемента",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/accent1_4.jpg",
                correct: true,
                message: "Да! Белый прямоугольник является самым крупным объектом на изображении, что привлекает к нему внимание",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {   
        title: "Акцент",
        question: "Вопрос 13",
        images: [
            {
                src: "images/accent2_1.jpg",
                correct: false,
                message: "Нет, это просто набор прямоугольников разного размера",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/accent2_2.jpg",
                correct: false,
                message: "Нет, прямоугольники не создают ярко выраженного акцента",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/accent2_3.jpg",
                correct: true,
                message: "Да! Среди прямоугольников выделяется большая звезда",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/accent2_4.jpg",
                correct: false,
                message: "Нет, это сбалансированная, симметричная композиция, но без акцента",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Меняем местами
    }
}


let currentQuestionIndex = 0;
const imagesContainer = document.getElementById('imagesContainer');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');
const nextButton = document.getElementById('next-button');
const cancelButton = document.getElementById('cancel-button');
const questionTitle = document.getElementById('question-title');

// Всплывающее окно для прерывания занятия
const confirmPopup = document.getElementById('confirm-popup');
const cancelLogoutButton = document.getElementById('cancel-logout-button');
const confirmLogoutButton = document.getElementById('confirm-logout-button');


shuffle(tests);

// Перемешиваем изображения для каждого вопроса
tests.forEach(test => {
    shuffle(test.images);
});
// Переменная для отслеживания правильных ответов
let correctAnswers = 0; // Инициализируем счетчик

function loadQuestion() {
    const currentQuestion = tests[currentQuestionIndex];

    // Устанавливаем заголовок в зависимости от текущего вопроса
    questionTitle.textContent = currentQuestion.title || "Вопрос не найден";

    // Очистить контейнер изображений
    imagesContainer.innerHTML = '';

    // Добавить изображения для текущего вопроса
    currentQuestion.images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = currentQuestion.question;
        img.className = 'image';
        img.setAttribute('data-correct', image.correct);
        img.setAttribute('data-message', image.message);
        img.setAttribute('data-footer-color', image.footerColor);
        img.setAttribute('data-icon-src', image.icon);

        imagesContainer.appendChild(img);

        // Добавляем обработчик события для изображения
        img.addEventListener('click', () => {
            showPopup(img);
        });
    });
}

  

function showPopup(image) {
    // Деактивируем остальные изображения
    const images = document.querySelectorAll('.image');
    images.forEach(img => {
        img.style.pointerEvents = 'none'; // Блокируем клики
        img.style.opacity = '0.5'; // Делаем полупрозрачными
    });

    const isCorrect = image.getAttribute('data-correct') === 'true';
    // Добавляем обводки в зависимости от правильного ответа
    if (isCorrect) {
        correctAnswers++;
        image.classList.add('border-correct'); // Добавляем зеленую обводку
    } else {
        image.classList.add('border-incorrect'); // Добавляем красную обводку
    }

    const message = image.getAttribute('data-message');
    const footerColor = image.getAttribute('data-footer-color');
    const buttonColor = image.getAttribute('data-button-color'); 
    const iconSrc = image.getAttribute('data-icon-src'); // Получаем путь к иконке

    // Заполняем поп-ап
    popupMessage.textContent = message;
    popup.style.display = 'block';
    
     // Устанавливаем иконку
     const footerIcon = document.getElementById('footer-icon');
     footerIcon.src = iconSrc; // Устанавливаем источник иконки

     // Меняем цвет футера поп-апа
     const popupFooter = document.querySelector('.popup-footer');
     popupFooter.style.backgroundColor = (isCorrect) ? '#4EFF84' : '#FF4E51'; // Меняем цвет фона футера поп-апа
 

     // Меняем цвет кнопки "Далее"
    nextButton.style.backgroundColor = buttonColor; // Меняем цвет фона кнопки "Далее"
    nextButton.style.color = (isCorrect) ? '#4EFF84' : '#FF4E51';

    let lessonActive = true; // Переменная для отслеживания активности занятия

    // Логика для кнопки "Далее"
    nextButton.onclick = () => {
        popup.style.display = 'none'; // Скрываем поп-ап
    
        currentQuestionIndex++; // Переход к следующему вопросу
        if (currentQuestionIndex < tests.length) {
            loadQuestion(); // Загружаем следующий вопрос
        } else {
            // Здесь мы должны сохранять количество правильных ответов
            localStorage.setItem('test1CorrectAnswers', correctAnswers);
            localStorage.setItem('lessonActive', true); // Устанавливаем статус занятия как "активное"
            window.location.href = "course1.html"; // Переход на страницу с уроками
        }
    };
    
    // Логика для кнопки "Прервать занятие"
cancelButton.onclick = () => {
    confirmPopup.style.display = 'block'; // Показываем подтверждающий попап
};

// Логика для кнопки "Отмена" в подтверждающем попапе
cancelLogoutButton.onclick = () => {
    confirmPopup.style.display = 'none'; // Скрываем подтверждающий попап
};

// Логика для кнопки "Прервать" в подтверждающем попапе
confirmLogoutButton.onclick = () => {
    console.log("Кнопка 'Прервать' подтверждения нажата");
    lessonActive = false; // Устанавливаем статус занятия как "неактивное"
    localStorage.removeItem('correctAnswers'); // Очистка данных
    localStorage.setItem('lessonActive', lessonActive); // Сохраняем статус занятия
    window.location.href = "course1.html"; // Перенаправление на страницу курса
};



}

loadQuestion();