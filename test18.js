const tests = [
    {
        question: "Вопрос 1",
        images: [
            {
                src: "images/uikitone1.jpg",
                correct: false,
                message: 'Нет, хотя UI kit может способствовать этому, его основная функция заключается в упрощении процесса разработки',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/uikitone2.jpg",
                correct: false,
                message: 'Нет, UI kit может включать современные тренды, но не является основной целью его применения',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/uikitone3.jpg",
                correct: true,
                message: "Да! UI kit позволяет значительно сократить время на проектирование и разработку, обеспечивая согласованность и стандартизацию",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/uikitone4.jpg",
                correct: false,
                message: 'Нет, это скорее результат хорошего дизайна, но не основная роль UI kit',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    }, {
        question: "Вопрос 2",
        images: [
            {
                src: "images/uikittwo1.jpg",
                correct: false,
                message: 'Нет, готовые компоненты, как правило, базируются на стандартных решениях, что может ограничивать креативность и инновации',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/uikittwo2.jpg",
                correct: false,
                message: 'Нет, хотя готовые компоненты могут способствовать согласованности, основное преимущество — это уменьшение затрат',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/uikittwo3.jpg",
                correct: false,
                message: 'Нет, это может быть результатом применения UI Kit, но не является его ключевым преимуществом',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/uikittwo4.jpg",
                correct: true,
                message: "Да! Готовые компоненты из UI Kit позволяют быстро и эффективно разрабатывать интерфейсы, существенно сокращая затраты по времени и ресурсам. Это позволяет разработчикам и дизайнерам использовать готовые решения вместо создания каждого элемента с нуля",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        question: "Вопрос 3",
        images: [
            {
                src: "images/uikitthree1.jpg",
                correct: false,
                message: 'Нет, использование UI Kit обычно упрощает и ускоряет процесс, а не усложняет его',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/uikitthree2.jpg",
                correct: true,
                message: "Да! Использование UI Kit помогает ускорить процесс разработки, так как предоставляет готовые компоненты и шаблоны, что позволяет сократить время, необходимое для создания интерфейса. Этоспособствует более быстрому выводу продукта на рынок",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/uikitthree3.jpg",
                correct: false,
                message: 'Нет, хотя определенная кастомизация может влиять на сроки, в целом, UI Kit предназначен для ускорения разработки, что делает этот вариант менее универсальным',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/uikitthree4.jpg",
                correct: false,
                message: 'Нет, UI Kit значительно ускоряет процесс разработки, что явно влияет на сроки вывода продукта на рынок',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 4",
        images: [
            {
                src: "images/uikitfour1.jpg",
                correct: false,
                message: 'Нет, это скорее результат использования UI Kits, а не основная цель',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/uikitfour2.jpg",
                correct: false,
                message: 'Нет, это также может быть следствием использования UI Kits, но не является их основной функцией',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/uikitfour3.jpg",
                correct: true,
                message: "Да! Основная цель UI Kits — предоставление готовых компонентов для ускорения разработки, в отличие от гайдлайнов, которые документируют правила дизайна",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/uikitfour4.jpg",
                correct: false,
                message: 'Нет, это характерно для гайдлайнов, а не для UI Kits, которые больше ориентированы на практическое применение',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 5",
        images: [
            {
                src: "images/uikitfive1.jpg",
                correct: true,
                message: "Да! Гайдлайны помогают определить визуальные и UX-принципы на ранних стадиях разработки, а UI Kits предоставляют готовые компоненты, которые используются в процессе реализации и разработки интерфейсов",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/uikitfive2.jpg",
                correct: false,
                message: 'Нет, гайдлайны применяются на начальных этапах для построения концепции дизайна, в то время как UI Kits активно используются именно на этапе реализации',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/uikitfive3.jpg",
                correct: false,
                message: 'Нет, и гайдлайны, и UI Kits имеют свои специфические роли на определенных этапах процесса разработки',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/uikitfive4.jpg",
                correct: false,
                message: 'Нет, у каждого инструмента есть свое место: гайдлайны служат справочником по принципам дизайна, а UI Kits предоставляют компоненты для реализации этих принципов',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 6",
        images: [
            {
                src: "images/uikitsix1.jpg",
                correct: false,
                message: 'Нет, это субъективный подход, который может привести к несогласованности с брендом и ожиданиями пользователей',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/uikitsix2.jpg",
                correct: false,
                message: 'Нет, хотя это важно, функциональность должна быть основана на брендовых требованиях и стиле, а не только на удобстве',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/uikitsix3.jpg",
                correct: false,
                message: 'Нет, тренды могут меняться, и следование им без учета фирменного стиля может привести к отсутствию уникальности и несоответствию бренду',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/uikitsix4.jpg",
                correct: true,
                message: "Да! Это обеспечивает согласованность и идентификацию продукта с брендом",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        question: "Вопрос 7",
        images: [
            {
                src: "images/uikitseven1.jpg",
                correct: false,
                message: 'Нет, это не все',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/uikitseven2.jpg",
                correct: false,
                message: 'Нет, это не все',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/uikitseven3.jpg",
                correct: true,
                message: "Да! ",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/uikitseven4.jpg",
                correct: false,
                message: 'Нет,  это не все',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 8",
        images: [
            {
                src: "images/uikiteight1.jpg",
                correct: false,
                message: 'Нет, это не все',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/uikiteight2.jpg",
                correct: true,
                message: "Да! ",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/uikiteight3.jpg",
                correct: false,
                message: 'Нет, это не все',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/uikiteight4.jpg",
                correct: false,
                message: 'Нет,  это не все',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    }]

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
        'Какую ключевую роль играет UI kit в процессе разработки интерфейса?', 'Какое ключевое преимущество использования готовых компонентов из UI Kit?',
        'Как использование UI Kit влияет на сроки вывода продукта на рынок?', 'Какова основная цель UI Kits, в отличие от гайдлайнов?',
        'Как используются UI Kits и гайдлайны на разных этапах разработки продукта?', 'Что должно являться основой при разработке визуального стиля элементов UI Kit?',
        'Какие основные компоненты и элементы должны входить в UI Kit?', 'Какие признаки могут указывать на неэффективность UI Kit?'
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
                    localStorage.setItem('test18CorrectAnswers', correctAnswers);
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
    
       
    localStorage.setItem('test18CorrectAnswers', correctAnswers);
    
        }
        
        loadQuestion();