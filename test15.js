const tests = [
    {
        question: "Вопрос 1",
        images: [
            {
                src: "images/prototypeone1.jpg",
                correct: false,
                message: "Нет, это может быть одной из функций прототипа, но не основная цель. Прототипы используются не только для демонстрации, но и для тестирования идей",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypeone2.jpg",
                correct: false,
                message: "Нет, хотя создание прототипов может сэкономить время и ресурсы в долгосрочной перспективе, это не является главной целью. Цель — получать обратную связь и улучшать продукт",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypeone3.jpg",
                correct: false,
                message: "Нет, визуализация также важна, но она служит инструментом для тестирования и сбора отзывов. Основная цель прототипа — это не только визуализация, но и проверка идей",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypeone4.jpg",
                correct: true,
                message: "Да! Это помогает выявлять проблемы и улучшать продукт до его финальной разработки",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        question: "Вопрос 2",
        images: [
            {
                src: "images/prototypetwo1.jpg",
                correct: false,
                message: "Нет, может замедлить процесс и отвлечь от тестирования основных идей. Занимает больше времени и ресурсов",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypetwo2.jpg",
                correct: false,
                message: "Нет, cлишком затратна по времени и неэффективна на ранних этапах, когда нужно сосредоточиться на концепции",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypetwo3.jpg",
                correct: true,
                message: "Да! Это позволяет быстро тестировать идеи и получать обратную связь",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/prototypetwo4.jpg",
                correct: false,
                message: "Нет, хотя это может быть верным, на ранних стадиях общепринят подход с низкой детализацией для быстрого тестирования идей",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 3",
        images: [
            {
                src: "images/prototypethree1.jpg",
                correct: false,
                message: "Нет, не позволяет пользователям взаимодействовать с интерфейсом, так как предоставляет только визуальное представление",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypethree2.jpg",
                correct: false,
                message: "Нет, служит для демонстрации функций, но не позволяет пользователям управлять интерфейсом или испытать взаимодействие",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypethree3.jpg",
                correct: false,
                message: "Нет, показывает динамику и анимацию, но также не обеспечивает возможности реального взаимодействия пользователя с системой",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypethree4.jpg",
                correct: true,
                message: "Да! Интерактивный прототип позволяет пользователям активно взаимодействовать с продуктом и оценивать его использование",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        question: "Вопрос 4",
        images: [
            {
                src: "images/prototypefour1.jpg",
                correct: false,
                message: "Нет, обеспечивает лишь базовое представление концепции и не демонстрирует детализированный интерфейс или функциональность",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypefour2.jpg",
                correct: true,
                message: "Да! Высокофидельный прототип, так как он наиболее близок к конечному продукту и демонстрирует реалистичное взаимодействие",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/prototypefour3.jpg",
                correct: false,
                message: "Нет, может быть слишком технической или сложной для восприятия, не всегда отражает конечный продукт в его восприятии пользователем",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypefour4.jpg",
                correct: false,
                message: "Нет, показывает процесс или концепцию, но не позволяет стейкхолдерам взаимодействовать с функционалом или получать непосредственное представление о продукте",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 5",
        images: [
            {
                src: "images/prototypefive1.jpg",
                correct: true,
                message: "Да!",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/prototypefive2.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypefive3.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypefive4.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 6",
        images: [
            {
                src: "images/prototypesix1.jpg",
                correct: false,
                message: "Нет, этот процесс не охватывает всю итеративную природу разработки прототипа, в частности, тестирование и улучшение",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypesix2.jpg",
                correct: false,
                message: "Нет, здесь недостаточно акцента на креативных этапах, таких как генерация идей и реализаци",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypesix3.jpg",
                correct: false,
                message: "Нет, этот вариант упускает этап исследования и генерации идей, которые важны для понимания потребностей пользователей",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypesix4.jpg",
                correct: true,
                message: "Да! Исследование: Анализ потребностей пользователей. Генерация идей: Создание и выбор концепций. Реализация: Создание прототипа. Тестирование: Оценка и сбор обратной связи",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        question: "Вопрос 7",
        images: [
            {
                src: "images/prototypseven1.jpg",
                correct: false,
                message: "Нет, низкофидельные прототипы обычно не отражают полноценный, готовый продукт, а являются лишь набросками или черновиками идей",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypseven2.jpg",
                correct: false,
                message: "Нет, хотя это аспект работы с прототипом, основной целью низкофидельного прототипирования является тестирование концепции и получение обратной связи, а не наладка взаимодействия с полностью развитым продуктом",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypseven3.jpg",
                correct: true,
                message: "Да! Низкофидельные прототипы позволяют быстро и экономично визуализировать идеи, выявить проблемы и получить отзывы от пользователей или стейкхолдеров на ранних стадиях разработки",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/prototypseven4.jpg",
                correct: false,
                message: "Нет, низкофидельные прототипы часто не детализируют функциональность, так как их цель — быстрота и простота для проверки идей, а не полноценная проработка всех деталей",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 8",
        images: [
            {
                src: "images/prototypeeight1.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypeeight2.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypeeight3.jpg",
                correct: true,
                message: "Да!",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/prototypeeight4.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 9",
        images: [
            {
                src: "images/prototypenine1.jpg",
                correct: true,
                message: "Да!",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/prototypenine2.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypenine3.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypenine4.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 10",
        images: [
            {
                src: "images/prototypeten1.jpg",
                correct: false,
                message: "Нет, хотя это хороший подход для тестирования идей, он не акцентирует на вовлечении пользователей на всех этапах, что необходимо для получения важной обратной связи",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypeten2.jpg",
                correct: true,
                message: "Да!  Это позволяет собирать мнения и предложения, что указывает на необходимость изменений и улучшений на каждом этапе, обеспечивая, что конечный продукт соответствует потребностям пользователей",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/prototypeten3.jpg",
                correct: false,
                message: "Нет, этот совет полезен для повышения эффективности и снижения затрат, но он не затрагивает аспекты взаимодействия с пользователями и не подчеркивает важность сбора обратной связи",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/prototypeten4.jpg",
                correct: false,
                message: "Нет, этот совет важен для разработки, но он не включает в себя аспект активного взаимодействия с пользователями на всех этапах, что является ключевым для получения их обратной связи и улучшения продукта",
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
        "Какова основная цель создания прототипов?", 'Какой уровень детализации прототипа наиболее предпочтителен на ранних стадиях разработки?',
        'Какой тип прототипа лучше всего подходит для тестирования взаимодействия пользователей?', 'Какой тип прототипа лучше всего подходит для финальной презентации концепции стейкхолдерам?',
        'Какие преимущества дает использование интерактивных прототипов?', 'Какие основные этапы включает в себя процесс создания прототипа?',
        'В чем заключается основная цель создания низкофидельных прототипов?', 'Когда целесообразно использовать высокофидельные интерактивные прототипы?',
        'Какой совет по прототипированию можно считать наиболее важным?', 'Какой совет по прототипированию подчеркивает важность обратной связи от пользователей?'
        ];
    
    
        let correctAnswers = 0; // Инициализируем счетчик
    
        function loadQuestion() {
            const currentQuestion = tests[currentQuestionIndex];
        
            // Устанавливаем заголовок в зависимости от текущего вопроса
            questionTitle.textContent = questionTitles[currentQuestionIndex] || "Вопрос не найден";
        
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
                    localStorage.setItem('test15CorrectAnswers', correctAnswers);
                    localStorage.setItem('lessonActive', true); // Устанавливаем статус занятия как "активное"
                    window.location.href = "course2.html"; // Переход на страницу с уроками
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
            window.location.href = "course2.html"; // Перенаправление на страницу курса
        };
    
       
    localStorage.setItem('test15CorrectAnswers', correctAnswers);
    
        }
        
        loadQuestion();