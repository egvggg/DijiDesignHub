
const tests = [
    {
        title: "Гротески",
        question: "Вопрос 1",
        questionImage: "images/grotesques.jpg",
        images: [
            {
                src: "images/grotesquestest1.jpg",
                correct: false,
                message: "Нет, с строгими формами гротеска и нейтральным тоном он не передает нужных эмоций. Эти качества требуют теплых и неформальных шрифтов, которые создают чувство близости и вовлеченности",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/grotesquestest12.jpg",
                correct: false,
                message: "Нет, хотя гротеск может вызывать уважение, его нейтральность не передает такого же уровня авторитетности, как серифные шрифты",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/grotesquestest13.jpg",
                correct: true,
                message: "Да! Черный гротеск передает профессионализм и сдержанность, что важно для большинства интернет-магазинов, стремящихся создать доверие у клиентов",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/grotesquestest14.jpg",
                correct: false,
                message: "Нет, сдержанность делает гротеск неэффективным для выражения эмоций и экспрессии.  Необходимы яркие и динамичные шрифты, чтобы передать разнообразные чувства",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Гротески",
        question: "Вопрос 2",
        questionImage: "images/grotesques1.jpg",
        images: [
            {
                src: "images/grotesquestest2.1.jpg",
                correct: false,
                message: "Нет, связаны с традиционными серифными шрифтами, которые имеют строгие линии и используются в научных и деловых публикациях, тогда как цветные гротески выглядят непринужденно и игриво",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/grotesquestest2.2.jpg",
                correct: false,
                message: "Нет, эти качества лучше всего передаются через минималистичные и строгие шрифты, в то время как цветные гротески акцентируют внимание и создают яркие визуальные воздействия",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/grotesquestest2.3.jpg",
                correct: true,
                message: "Да! Яркие цветные буквы привлекают внимание и создают эмоциональную реакцию",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/grotesquestest2.4.jpg",
                correct: false,
                message: "Нет, обычно передаются гладкими, тонкими линиями, что резко контрастирует с яркими и декоративными элементами гротесков",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Антиквы",
        question: "Вопрос 3",
        questionImage: "images/anciquties.jpg",
        images: [
            {
                src: "images/anciqutiestest11.jpg",
                correct: false,
                message: "Нет, антиквы не передают мощи, как более строгие шрифты. Они больше относятся к элегантности нежели к уверенности",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/anciqutiestest12.jpg",
                correct: false,
                message: "Нет, антиквы акцентируют внимание на информации, не вызывая ассоциаций с творчеством и самовыражением",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/anciqutiestest13.jpg",
                correct: false,
                message: "Нет, хотя антиквы могут передавать элегантность, их цель — информировать, а не восхищать",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/anciqutiestest14.jpg",
                correct: true,
                message: "Да!  Антиквы имеют классическую эстетику, что придаёт серьёзность и авторитет, ассоциируясь с высоким уровнем знаний",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        title: "Антиквы",
        question: "Вопрос 4",
        questionImage: "images/anciqutiesimg.jpg",
        images: [
            {
                src: "images/anciqutiestest21.jpg",
                correct: true,
                message: "Да! Антиквы часто используются в люксовых брендах для передачи статуса и эксклюзивности",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/anciqutiestest22.jpg",
                correct: false,
                message: "Нет, их традиционный стиль может восприниматься как устаревший в контексте современных тенденций. Для передачи динамичности предпочтительнее использовать более современные, простые и смелые шрифты",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/anciqutiestest22.jpg",
                correct: false,
                message: "Нет, хотя антиквы могут передавать авторитет, их изящный и тонкий дизайн не создает визуальной мощи, как более строгие и жирные шрифты",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/anciqutiestest24.jpg",
                correct: false,
                message: "Нет, антиквы не предназначены для выражения креативности или динамичности",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Рукописные",
        question: "Вопрос 5",
        questionImage: "images/handwritten.jpg",
        images: [
            {
                src: "images/headwritten11.jpg",
                correct: false,
                message: "Нет, хотя рукописный шрифт может быть привлекательным, он не вызывает тех же ассоциаций с формальностью и авторитетом, что и строгие шрифты",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/headwritten12.jpg",
                correct: true,
                message: "Да! Рукописный шрифт ассоциируется с handmade-продуктами и личным подходом, подчеркивая, что каждое изделие сделано с любовью",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/headwritten13.jpg",
                correct: false,
                message: "Нет, рукописный шрифт не создает визуальной мощи или уверенности. Для передачи этих качеств лучше подойдут более строгие шрифты с четкими линиями и формами",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/headwritten14.jpg",
                correct: false,
                message: "Нет, рукописный шрифт не ассоциируется с элегантностью и высоким статусом, как классические антиквы или шрифты с засечками",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Акцидентные",
        question: "Вопрос 6",
        questionImage: "images/displayfonts.jpg",
        images: [
            {
                src: "images/displayfonts11.jpg",
                correct: false,
                message: "Нет, эти шрифты не имеют выраженной индивидуальности ручной работы, поскольку они более коммерческие и формальные",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/displayfonts12.jpg",
                correct: false,
                message: "Нет, акцидентные шрифты не передают силу, как более строгие и четкие шрифты, которые лучше подходят для этой цели",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/displayfonts13.jpg",
                correct: true,
                message: "Да! Акцидентные шрифты яркие и выразительные, легко узнаваемые, создают эмоциональную связь и помогают бренду выделиться",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/displayfonts14.jpg",
                correct: false,
                message: "Нет, они не создают ощущение серьёзности и формальности, присущее шрифтам с засечками или строгим без засечек",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Гротески",
        question: "Вопрос 7",
        questionImage: "images/grotesques2.jpg",
        images: [
            {
                src: "images/grotesquestest31.jpg",
                correct: false,
                message: "Нет, гротеск не передает ощущение индивидуальности или ручного труда, поскольку его дизайн часто стандартизирован и коммерциализирован",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/grotesquestest32.jpg",
                correct: false,
                message: "Нет, гротеск не всегда вызывает чувство мощи или авторитета, как более тяжёлые и строгие шрифты",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/grotesquestest33.jpg",
                correct: true,
                message: "Да! Гротеск идеально подходит для интерфейсов, которые требуют легкости восприятия информации",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/grotesquestest34.jpg",
                correct: false,
                message: "Нет, его простота и функциональность не предполагают яркой креативности или эмоциональной экспрессии",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    }
]

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

    const questionImage = document.getElementById('questionImage');
    questionImage.src = currentQuestion.questionImage; // Установка вопроса изображения
    questionImage.alt = currentQuestion.question; // Установка доступного текста для вопроса
    
    // Очистить контейнер изображений
    imagesContainer.innerHTML = ''; 

    // Добавить изображения для текущего вопроса
    currentQuestion.images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.src; // Убедитесь, что src правильно сконструирован
        img.alt = currentQuestion.question; // Установка доступного текста
        img.className = 'image'; // Стили CSS могут влиять на видимость
        img.setAttribute('data-correct', image.correct);
        img.setAttribute('data-message', image.message);
        img.setAttribute('data-footer-color', image.footerColor);
        img.setAttribute('data-icon-src', image.icon);

        imagesContainer.appendChild(img); // Добавляем изображение в контейнер

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
                localStorage.setItem('test3CorrectAnswers', correctAnswers);
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

   
localStorage.setItem('test3CorrectAnswers', correctAnswers);

    };
    
    loadQuestion();