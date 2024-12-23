const tests = [
    {
        question: "Вопрос 1",
        questionText2: `
        Для чего на сайте Zara используется принцип сходства?
    `,
        questionImage: "images/zara.jpg",
        questionText1: `
        Сайт <a href="https://www.zara.com/" target="_blank" class="link__img"> Zara</a>
    `,
        images: [
            {
                src: "images/zara1.jpg",
                correct: false,
                message: "Нет, это относится к принципу контраста, а не сходства",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/zara2.jpg",
                correct: false,
                message: "Нет, это акцент на новых товарах и не связано с принципом сходства",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/zara3.jpg",
                correct: false,
                message: "Нет, хотя 'группировка фото' может использовать принцип сходства, правильнее говорить о группировке товаров, так как это лучше отражает назначение сайта и потребности пользователей",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/zara4.jpg",
                correct: true,
                message: "Да! Принцип сходства помогает организовать товары по общим характеристикам и облегчает навигацию",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        question: "Вопрос 2",
        questionText2: `
         Где ты видишь применение принципа сходства на сайте музыкальной группы U2?
    `,
        questionImage: "images/U2.jpg",
        questionText1: `
        Сайт <a href="https://www.u2.com/" target="_blank" class="link__img"> U2</a>
    `,
        images: [
            {
                src: "images/U21.jpg",
                correct: true,
                message: "Да! Фотографии оформлены в едином стиле, что помогает создать визуальную связь между членами группы. Логотип имеет единый стиль и цветовую палитру, а альбомы и видеоролики U2 имеют общий визуальный стиль",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/U22.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/U23.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/U24.jpg",
                correct: false,
                message: "Нетй",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 3",
        questionText2: `
        Для чего на сайте Музея современного искусства используется принцип близости?
    `,
        questionImage: "images/MoMA.jpg",
        questionText1: `
        Сайт <a href="https://www.moma.org/" target="_blank" class="link__img"> MoMA</a>
    `,
        images: [
            {
                src: "images/MoMA1.jpg",
                correct: false,
                message: "Нет, Принцип близости не предназначен для акцентирования популярных работ",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/MoMA2.jpg",
                correct: true,
                message: "Да! Это помогает посетителям легче воспринимать и понимать концепции, которые связаны между собой",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/MoMA3.jpg",
                correct: false,
                message: "Нет, новинки требуют визуальных акцентов, таких как яркие цвета, что не соответствует принципу близости",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/MoMA4.jpg",
                correct: false,
                message: "Нет, это принцип сходства, так как он основывается на характеристиках работ, а не их близости",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 4",
        questionText2: `
        Для чего на сайте Zara используется принцип близости?
    `,
        questionImage: "images/zara.jpg",
        questionText1: `
        Сайт <a href="https://www.zara.com/" target="_blank" class="link__img"> Zara</a>
    `,
        images: [
            {
                src: "images/zara5.jpg",
                correct: false,
                message: "Нет, это больше связано с классификацией, а не с принципом близости, который акцентирует внимание на визуальной организации",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/zara6.jpg",
                correct: false,
                message: "Нет, это касается дизайна и не имеет отношения к принципу близости",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/zara7.jpg",
                correct: false,
                message: "Нет, хотя отступы могут использоваться для выделения, принцип близости больше связан с объединением и группировкой элементов, чем с акцентированием",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/zara8.jpg",
                correct: true,
                message: "Да! Принцип близости на сайте Zara используется для группировки товаров в блоки, что помогает пользователям быстрее находить и воспринимать информацию о соответствующих категориях",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        question: "Вопрос 5",
        questionText2: `
        Где ты видишь применение принципа замкнутости на сайте музыкальной группы U2?
    `,
        questionImage: "images/U2.jpg",
        questionText1: `
        Сайт <a href="https://www.zara.com/" target="_blank" class="link__img"> U2</a>
    `,
        images: [
            {
                src: "images/U25.jpg",
                correct: true,
                message: "Да! В логотипе и обложках замкнутые формы создают узнаваемость. В расположении фотографий участников группы организация в замкнутых областях делает их более целостными. В организации блоков с информацией об альбомах замкнутые блоки помогают структурировать информацию",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/U26.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/U27.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/U28.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 6",
        questionText2: `
        Для чего на сайте Музея современного искусства используется принцип замкнутости?
    `,
        questionImage: "images/MoMA.jpg",
        questionText1: `
        Сайт <a href="https://www.moma.org/" target="_blank" class="link__img"> MoMA</a>
    `,
        images: [
            {
                src: "images/MoMA5.jpg",
                correct: true,
                message: "Да! Принцип замкнутости используется для создания четких визуальных границ вокруг картин, что помогает выделить каждую работу как отдельный элемент и улучшает восприятие",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/MoMA6.jpg",
                correct: false,
                message: "Нет, это относится к организации информации, чем к визуальному оформлению",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/MoMA7.jpg",
                correct: false,
                message: "Нет, выделение популярных работ требует других дизайнерских решений, таких как цветовые акценты",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/MoMA8.jpg",
                correct: false,
                message: "Нет, это больше связано с принятием решения о группировке и связности, чем с принципом замкнутости",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 7",
        questionText2: `
        Для чего на сайте Shutterstock используется принцип непрерывности?
    `,
        questionImage: "images/Shutterstock.jpg",
        questionText1: `
        Сайт <a href="https://www.shutterstock.com/ru/" target="_blank" class="link__img"> Shutterstock</a>
    `,
        images: [
            {
                src: "images/Shutterstock1.jpg",
                correct: false,
                message: "Нет, это ближе к принципу замкнутости",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Shutterstock2.jpg",
                correct: false,
                message: "Нет, это относится к принципу близости ",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Shutterstock3.jpg",
                correct: false,
                message: "Нет, это связано с организацией структуры, но не с принципом непрерывности",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Shutterstock4.jpg",
                correct: true,
                message: "Да!  Это помогает пользователям лучше воспринимать информацию, обеспечивая визуальную связность и легкость навигации между различными категориями и элементами",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        question: "Вопрос 8",
        questionText2: `
        Для чего на сайте Zara используется принцип непрерывности?
    `,
        questionImage: "images/zara.jpg",
        questionText1: `
        Сайт <a href="https://www.zara.com/" target="_blank" class="link__img"> Zara</a>
    `,
        images: [
            {
                src: "images/zara9.jpg",
                correct: false,
                message: "Нет, это относится к принципу контраста",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/zara10.jpg",
                correct: false,
                message: "Нет, это больше связано с организацией элементов",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/zara11.jpg",
                correct: true,
                message: "Да! Это помогает связно представить различные разделы сайта, улучшая навигацию и визуальное восприятие",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/zara12.jpg",
                correct: false,
                message: "Нет, это связано с принципом непрерывности",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 9",
        questionText2: `
        Для чего на сайте Pentagram используется принцип фигуры и фона?
    `,
        questionImage: "images/pentagram.jpg",
        questionText1: `
        Сайт <a href="https://www.pentagram.com/" target="_blank" class="link__img"> Pentagram</a>
    `,
        images: [
            {
                src: "images/pentagram1.jpg",
                correct: true,
                message: "Да! На сайте Pentagram этот принцип используется для того, чтобы важный контент, такой как тексты, изображения и элементы дизайна, легко выделялся на фоне",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/pentagram2.jpg",
                correct: false,
                message: "Нет, принцип фигуры и фона не используется для объединения элементов",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/pentagram3.jpg",
                correct: false,
                message: "Нет, хотя группировка предполагает определённое визуальное оформление, принцип фигуры и фона не отвечает за сам процесс группировки",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/pentagram4.jpg",
                correct: false,
                message: "Нет, это связано с принципом близости или иерархии",
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
    "Принцип сходства", "Принцип сходства",
    "Принцип близости", "Принцип близости",
    "Принцип замкнутости",  "Принцип замкнутости",
    "Принцип непрерывности",  "Принцип непрерывности",
    "Принцип фигуры и фона"
];


    let correctAnswers = 0; // Инициализируем счетчик

    function loadQuestion() {
        const currentQuestion = tests[currentQuestionIndex];
    
        // Устанавливаем заголовок в зависимости от текущего вопроса
        questionTitle.textContent = questionTitles[currentQuestionIndex] || "Вопрос не найден";
        const questionImage = document.getElementById('questionImage');
        questionImage.src = currentQuestion.questionImage; // Установка вопроса изображения
        questionImage.alt = currentQuestion.question; // Установка доступного текста для вопроса

        const questionText = document.getElementById('questionText1');
        questionText.innerHTML = currentQuestion.questionText1;

        const questionText2 = document.getElementById('questionText2');
        questionText2.innerHTML = currentQuestion.questionText2;

    
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
                localStorage.setItem('test6CorrectAnswers', correctAnswers);
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