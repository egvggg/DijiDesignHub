const tests = [
    {
        question: "Вопрос 1",
        questionImage: "images/correct1.jpg",
        images: [
            {
                src: "images/correct11.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/correct12.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/correct13.jpg",
                correct: true,
                message: "Да! В этом макете используется много стилей шрифтов",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/correct14.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 2",
        questionImage: "images/correct2.jpg",
        images: [
            {
                src: "images/correct21.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/correct22.jpg",
                correct: true,
                message: "Да!",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/correct23.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/correct24.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 3",
        questionImage: "images/correct3.jpg",
        images: [
            {
                src: "images/correct31.jpg",
                correct: true,
                message: "Да!",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/correct32.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/correct33.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/correct34.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 4",
        questionImage: "images/correct4.jpg",
        images: [
            {
                src: "images/correct41.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/correct42.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/correct43.jpg",
                correct: true,
                message: "Да!",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/correct44.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 5",
        questionImage: "images/correct5.jpg",
        images: [
            {
                src: "images/correct51.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/correct52.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/correct53.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/correct54.jpg",
                correct: true,
                message: "Да!",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    }
]

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

const questionTitles = [
    "Что нужно здесь исправить ", "Что нужно здесь исправить ",
    "Что нужно здесь исправить ", "Что нужно здесь исправить ",
    "Что нужно здесь исправить "
];


    let correctAnswers = 0; // Инициализируем счетчик

    function loadQuestion() {
        const currentQuestion = tests[currentQuestionIndex];
    
        // Устанавливаем заголовок в зависимости от текущего вопроса
        questionTitle.textContent = questionTitles[currentQuestionIndex] || "Вопрос не найден";
        const questionImage = document.getElementById('questionImage');
        questionImage.src = currentQuestion.questionImage; // Установка вопроса изображения
        questionImage.alt = currentQuestion.question; // Установка доступного текста для вопроса
    
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
                localStorage.setItem('test4CorrectAnswers', correctAnswers);
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

   
localStorage.setItem('test4CorrectAnswers', correctAnswers);

    }
    
    loadQuestion();