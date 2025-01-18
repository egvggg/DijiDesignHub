const tests = [
    {
        title: "Шрифт",
        question: "Вопрос 1",
        images: [
            {
                src: "images/font1.jpg",
                correct: true,
                message: "Да!",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/font2.jpg",
                correct: false,
                message: "Нет, это просто набор символов",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/font3.jpg",
                correct: false,
                message: "Нет, это стиль шрифта",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/font4.jpg",
                correct: false,
                message: "Нет, это начертание",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Гарнитура",
        question: "Вопрос 2",
        images: [
            {
                src: "images/headset1.jpg",
                correct: false,
                message: "Нет, это стиль шрифта",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/headset2.jpg",
                correct: false,
                message: "Нет, это начертание",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/headset3.jpg",
                correct: false,
                message: "Нет, это просто набор символов",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/headset4.jpg",
                correct: true,
                message: "Да!",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        title: "Начертание",
        question: "Вопрос 3",
        images: [
            {
                src: "images/style1.jpg",
                correct: false,
                message: "Нет, это стиль шрифта",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/style2.jpg",
                correct: false,
                message: "Нет, это гарнитура",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/style3.jpg",
                correct: false,
                message: "Нет, это просто набор символов",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/style4.jpg",
                correct: true,
                message: "Да!",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        title: "Трекинг",
        question: "Вопрос 4",
        images: [
            {
                src: "images/tracking1.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/tracking2.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/tracking3.jpg",
                correct: true,
                message: "Да!",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/tracking4.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
},  
{
    title: "Интерлиньяж",
    question: "Вопрос 5",
    images: [
        {
            src: "images/leading1.jpg",
            correct: false,
            message: "Нет, это трекинг",
            footerColor: "#FF4E51",
            icon: "images/icon1.svg"
        },
        {
            src: "images/leading2.jpg",
            correct: true,
            message: "Да!",
            footerColor: "#4EFF84",
            icon: "images/icon.svg"
        },
        {
            src: "images/leading3.jpg",
            correct: false,
            message: "Нет, это сломанная выключка",
            footerColor: "#FF4E51",
            icon: "images/icon1.svg"
        },
        {
            src: "images/leading4.jpg",
            correct: false,
            message: "Нет, это кернинг",
            footerColor: "#FF4E51",
            icon: "images/icon1.svg"
        }
    ]
},
{
    title: "Выключка",
    question: "Вопрос 6",
    images: [
        {
            src: "images/textjustification1.jpg",
            correct: false,
            message: "Нет",
            footerColor: "#FF4E51",
            icon: "images/icon1.svg"
        },
        {
            src: "images/textjustification2.jpg",
            correct: false,
            message: "Нет",
            footerColor: "#FF4E51",
            icon: "images/icon1.svg"
        },
        {
            src: "images/textjustification3.jpg",
            correct: true,
            message: "Да!",
            footerColor: "#4EFF84",
            icon: "images/icon.svg"
        },
        {
            src: "images/textjustification4.jpg",
            correct: false,
            message: "Нет",
            footerColor: "#FF4E51",
            icon: "images/icon1.svg"
        }
    ]
}]

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
            console.log("Кнопка 'Далее' нажата");
            popup.style.display = 'none'; // Скрываем поп-ап
        
            currentQuestionIndex++; // Переход к следующему вопросу
            if (currentQuestionIndex < tests.length) {
                loadQuestion(); // Загружаем следующий вопрос
            } else {
                // Здесь мы должны сохранять количество правильных ответов
                localStorage.setItem('test2CorrectAnswers', correctAnswers);
                localStorage.setItem('lessonActive', true); // Устанавливаем статус занятия как "активное"
                window.location.href = "course1.html"; // Переход на страницу с уроками
            }
        };
        
        // Логика для кнопки "Прервать занятие"
    cancelButton.onclick = () => {
        console.log("Кнопка 'Прервать занятие' нажата");
        confirmPopup.style.display = 'block'; // Показываем подтверждающий попап
    };
    
    // Логика для кнопки "Отмена" в подтверждающем попапе
    cancelLogoutButton.onclick = () => {
        console.log("Кнопка 'Отмена' подтверждения нажата");
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

   
localStorage.setItem('test2CorrectAnswers', correctAnswers);

    }
    
    loadQuestion();