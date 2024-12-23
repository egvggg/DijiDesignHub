const tests = [
    {
        question: "Вопрос 1",
        questionImage: "images/redimage.jpg",
        questionText: `
        «<a href="https://www.newschool.edu/parsons/" target="_blank" class="link__img">Parsons</a>» — школа дизайна номер один в США и одна из трех лучших в мире.
    `,
        images: [
            {
                src: "images/tedtest11.jpg",
                correct: false,
                message: "Нет, зеленый цвет лучше передает это понятия",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/tedtest12.jpg",
                correct: true,
                message: "Да! Обучать и развивать молодые умы можно только с энергией, страстью и любовью к дизайну. Это именно то, что отражает цветовая палитра",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/tedtest13.jpg",
                correct: false,
                message: "Нет, в дизайне красный часто используется для подчеркивания креативных идей, а не для обозначения опасности",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/tedtest4.jpg",
                correct: false,
                message: "Нет, красный цвет вызывает активные эмоции, такие как страсть и динамика, что создает атмосферу энергии, а не спокойствия",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 2",
        questionImage: "images/redimage1.jpg",
        questionText: `
        «<a href="https://besthorrorscenes.com/" target="_blank" class="link__img">Best Horror Scenes</a>» — это сборник сцен, которые, по мнению автора, являются одними из самых впечатляющих в жанре ужасов.
    `,
        images: [
            {
                src: "images/tedtest11.jpg",
                correct: false,
                message: "Нет, зеленый цвет лучше передает это понятия",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/tedtest12.jpg",
                correct: false,
                message: "Нет, хотя красный также символизирует страсть и любовь, в контексте ужасов страсть переходит в опасность",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/tedtest13.jpg",
                correct: true,
                message: "Да! Красный цвет традиционно ассоциируется с опасностью, предупреждениями и угрозами",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/tedtest14.jpg",
                correct: false,
                message: "Нет, хотя красный цвет может означать энергию и активность, в жанре ужасов эта энергия часто трансформируется в гнев или страх",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 3",
        questionImage: "images/greenimage.jpg",
        questionText: `
        «<a href="https://theyearofgreta.com/" target="_blank" class="link__img">The Year of Greta</a>» — это сайт, посвященный активистке Грете Тунберг и её деятельности по борьбе с изменением климата.
    `,
        images: [
            {
                src: "images/greentest1.jpg",
                correct: false,
                message: 'Нет, зеленый может ассоциироваться с деньгами (например, "зеленые" доллары), но это значение недостаточно сильно, чтобы перекрыть его ассоциацию с природой и экологией',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/greentest2.jpg",
                correct: true,
                message: "Да! Зеленый символизирует гармонию с окружающей средой и активизм в защиту экологии. Используется на сайтах, посвященных экологии",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/greentest3.jpg",
                correct: false,
                message: "Нет, синий цвет ассоциируется с серьезностью и профессионализмом, но не столь тесно связан с экологией, как зеленый",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/greentest4.jpg",
                correct: false,
                message: "Нет, синий цвет ассоциируется с серьезностью и профессионализмом, но не столь тесно связан с экологией, как зеленый",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 4",
        questionImage: "images/blueimage.jpg",
        questionText: `
        «<a href="https://www.wix-pro.com.au/" target="_blank" class="link__img">Wix Pro</a>» — сайт, который создает и обслуживание сайтов на платформе Wix.
    `,
        images: [
            {
                src: "images/blueimage1.jpg",
                correct: false,
                message: 'Нет, для тем, связанных со здоровьем, более подходящими являются зеленый',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/blueimage2.jpg",
                correct: true,
                message: "Да! Синий цвет часто используется в бизнесе и технологии, поскольку ассоциируется с доверием, стабильностью и профессионализмом",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/blueimage3.jpg",
                correct: false,
                message: "Нет, если синий цвет и может ассоциироваться с богатством, это значение менее выражено",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/blueimage4.jpg",
                correct: false,
                message: "Нет, хотя синий может вызывать грустные ассоциации, его использование связано больше с серьезными темами, а не с эмоциональными состояниями",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 5",
        questionImage: "images/blueimagsecond.jpg",
        questionText: `
        «<a href="https://wi.mit.edu/" target="_blank" class="link__img">Whitehead Institute</a>» — всемирно известное некоммерческое исследовательское учреждение, занимающееся улучшением здоровья человека .
    `,
        images: [
            {
                src: "images/blueimagsecond1.jpg",
                correct: false,
                message: "Нет, хотя синий может вызывать грустные ассоциации, его использование связано больше с серьезными темами, а не с эмоциональными состояниями",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/blueimagsecond2.jpg",
                correct: false,
                message: "Нет, красный цвет чаще ассоциируется с опасностью, тогда как синий воспринимается как спокойный и безопасный",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/blueimagsecond3.jpg",
                correct: true,
                message: "Да! Синий цвет часто используется в бизнесе и технологии, поскольку ассоциируется с доверием, стабильностью и профессионализмом",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/blueimagsecond4.jpg",
                correct: false,
                message: "Нет, синий цвет не вызывает возбуждения; скорее, он создает расслабляющую и уравновешивающую атмосферу",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 6",
        questionImage: "images/yellowimage.jpg",
        questionText: `
        «<a href="https://www.offf.barcelona//" target="_blank" class="link__img">OFFF Barcelona</a>» — сайт фестиваля, который объединяет лучшие творческие умы, отдавая должное их работам.
    `,
        images: [
            {
                src: "images/yellowimage1.jpg",
                correct: false,
                message: "Нет, желтый скорее вызывает радость и оптимизм, чем экстренное возбуждение",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/yellowimage2.jpg",
                correct: true,
                message: "Да! Визуальная среда, наполненная желтым, может стимулировать воображение и вдохновлять участников",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/yellowimage3.jpg",
                correct: false,
                message: "Нет,  желтый цвет передает легкость и креативность, но не умственную сосредоточенность",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/yellowimage4.jpg",
                correct: false,
                message: "Нет, желтый цвет больше фокусируется на идеях и вдохновении, а не на материальном изобилии",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
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
    "Красный", "Красный",
    "Зелёный", "Синий",
    "Синий", "Жёлтый"
];


    let correctAnswers = 0; // Инициализируем счетчик

    function loadQuestion() {
        const currentQuestion = tests[currentQuestionIndex];
    
        // Устанавливаем заголовок в зависимости от текущего вопроса
        questionTitle.textContent = questionTitles[currentQuestionIndex] || "Вопрос не найден";
        const questionImage = document.getElementById('questionImage');
        questionImage.src = currentQuestion.questionImage; // Установка вопроса изображения
        questionImage.alt = currentQuestion.question; // Установка доступного текста для вопроса

        const questionText = document.getElementById('questionText');
        questionText.innerHTML = currentQuestion.questionText;

    
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

   
localStorage.setItem('test5CorrectAnswers', correctAnswers);

    }
    
    loadQuestion();