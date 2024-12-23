const tests = [
    {
        question: "Вопрос 1",
        images: [
            {
                src: "images/designconceptone1.jpg",
                correct: false,
                message: 'Нет, дизайн-концепция не относится к стратегиям маркетинга или продвижения. Она фокусируется на визуальных и стилистических аспектах дизайна',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/designconceptone2.jpg",
                correct: false,
                message: 'Нет, техническое описание обычно включает спецификации и инструкции, но дизайн-концепция более абстрактна и включает в себя креативные идеи, а не детали исполнения',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/designconceptone3.jpg",
                correct: true,
                message: "Да! Дизайн-концепция представляет собой основную визуальную идею и подход, которые будут использоваться при создании продукта, включая элементы стиля, цветовые схемы, шрифты и общую эстетику",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/designconceptone4.jpg",
                correct: false,
                message: 'Нет, рекомендации по юзабилити сосредоточены на функциональности и удобстве использования, в то время как дизайн-концепция охватывает более широкий спектр визуальных и художественных элементов',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 2",
        images: [
            {
                src: "images/designconcepttwo1.jpg",
                correct: false,
                message: 'Нет, хотя юзабилити важно для дизайна, оно касается удобства использования и функциональности продукта. Дизайн-концепция же сосредоточена на визуальных и эстетических аспектах',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/designconcepttwo2.jpg",
                correct: true,
                message: "Да! Она определяет общий стиль, эстетику и подход к визуальному оформлению продукта",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/designconcepttwo3.jpg",
                correct: false,
                message: 'Нет, технические требования описывают параметры и спецификации, необходимые для реализации дизайна, но не отражают креативную и визуальную идею, которая является основой концепции',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/designconcepttwo4.jpg",
                correct: false,
                message: 'Нет, это скорее конкретные компоненты, которые могут использоваться в процессе разработки, но они не составляют суть дизайн-концепции, которая формируется на основе общей визуальной идеи',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 3",
        images: [
            {
                src: "images/designconceptthree1.jpg",
                correct: true,
                message: "Да! Это помогает всем членам команды понимать цели и направления проекта, что способствует более эффективному сотрудничеству и координации",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/designconceptthree2.jpg",
                correct: false,
                message: 'Нет, это больше относится к плану проекта или дорожной карте, а не к самой концепции, которая сосредоточена на визуальном и эстетическом аспекте',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/designconceptthree3.jpg",
                correct: false,
                message: 'Нет, хотя некоторые ограничения могут быть связаны с концепцией, основной задачей дизайн-концепции является вдохновение и направление, а не только установление ограничений',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/designconceptthree4.jpg",
                correct: false,
                message: 'Нет, технические требования относятся к спецификациям и аспектам реализации, а дизайн-концепция более креативна и фокусируется на художественном видении',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 4",
        images: [
            {
                src: "images/designconceptfour1.jpg",
                correct: false,
                message: 'Нет, это слишком общее и не учитывает конкретные визуальные элементы, которые важны для реализации концепции',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/designconceptfour2.jpg",
                correct: false,
                message: 'Нет, это лишь часть визуальной концепции, но не охватывает все компоненты, такие как цвета и шрифты',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/designconceptfour3.jpg",
                correct: true,
                message: "Да! Это включает в себя не только общий стилистический подход, но и конкретные элементы, которые вместе создают целостное визуальное оформление продукта",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/designconceptfour4.jpg",
                correct: false,
                message: 'Нет, это слишком узкий подход; цветовая палитра и типографика важны, но дизайн-концепция также включает в себя другие визуальные элементы, такие как иконки и графические компоненты',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 5",
        images: [
            {
                src: "images/designconceptfive1.jpg",
                correct: false,
                message: 'Нет, даже для внутренних проектов дизайн важен для удобства и эффективности, поэтому дизайн-концепция может понадобиться',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/designconceptfive2.jpg",
                correct: true,
                message: "Да! В таких случаях командам часто нужно быстро реагировать на изменения и адаптироваться к новым требованиям, что делает более формализованный процесс работы менее эффективным",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/designconceptfive3.jpg",
                correct: false,
                message: 'Нет, в этом случае детальная концепция может помочь учитывать эти ограничения и правильно их реализовать',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/designconceptfive4.jpg",
                correct: false,
                message: 'Нет, хороший дизайн все равно может улучшить пользовательский опыт, даже если визуализация не является приоритетом',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 6",
        images: [
            {
                src: "images/designconceptsix1.jpg",
                correct: false,
                message: 'Нет, мудборд не имеет отношения к финансам и не содержит количественных данных',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/designconceptsix2.jpg",
                correct: false,
                message: 'Нет, техническое задание (ТЗ) включает подробные спецификации и требования к проекту, но не отражает визуальные идеи',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/designconceptsix3.jpg",
                correct: true,
                message: "Да! Он используется для сбора и визуализации вдохновения, цветовых палитр, текстур, шрифтов и других элементов, которые могут помочь передать общее настроение и концепцию проекта",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/designconceptsix4.jpg",
                correct: false,
                message: 'Нет, список критериев может включать требования или ожидания клиентов, но не охватывает визуальные аспекты. Мудборд фокусируется на эстетике и визуальном стиле, а не на функциональных и качественных оценках',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 7",
        images: [
            {
                src: "images/designconceptseven1.jpg",
                correct: false,
                message: 'Нет, хотя это полезный метод для изучения трендов и получения вдохновения, он больше направлен на анализ контента и аудитории, чем на активное создание идей',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/designconceptseven2.jpg",
                correct: false,
                message: 'Нет, этот метод может помочь собрать требования и ожидания клиентов, но он не предназначен для создания идей. Звонки с клиентами обычно фокусируются на их потребностях и проблемах, а не на креативных аспектах дизайна',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/designconceptseven3.jpg",
                correct: false,
                message: 'Нет, этот метод полезен для понимания рыночной ситуации и определения лучших практик. Однако анализ конкурентов больше ориентирован на изучение чужих идей, чем на генерацию собственных',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/designconceptseven4.jpg",
                correct: true,
                message: "Да! Этот метод предполагает генерацию большого количества идей в свободной и открытой атмосфере, что позволяет участникам свободно выражать свои мысли и креативные идеи без оценки или критики",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        question: "Вопрос 8",
        images: [
            {
                src: "images/designconcepteight1.jpg",
                correct: false,
                message: 'Нет, учет потребностей и интересов целевой аудитории критически важен для создания успешного дизайна и удовлетворения запросов пользователей',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/designconcepteight2.jpg",
                correct: true,
                message: "Да! Цель дизайна — создать продукт, который удовлетворяет потребности пользователей и соответствует рыночным условиям, а не только отражает вкус или стиль конкретного дизайнера",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/designconcepteight3.jpg",
                correct: false,
                message: 'Нет, знание актуальных трендов помогает дизайнерам оставаться конкурентоспособными и создавать релевантные продукты, которые соответствуют ожиданиям рынка',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/designconcepteight4.jpg",
                correct: false,
                message: 'Нет, анализ конкурентов позволяет выявить лучшие практики и возможности для дифференциации, что также важно для создания успешной концепции',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 9",
        images: [
            {
                src: "images/designconceptnine1.jpg",
                correct: false,
                message: 'Нет, несмотря на то что похвала может быть приятной и мотивирующей, она не дает конкретной информации о том, что можно улучшить в концепции. Такая обратная связь не способствует дальнейшему развитию идеи',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/designconceptnine2.jpg",
                correct: false,
                message: 'Нет, общие замечания могут быть полезны, однако они часто слишком расплывчаты и не указывают на конкретные аспекты, которые требуют работы. Чтобы эффективно доработать концепцию, нужны более детальные и целенаправленные комментарии',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/designconceptnine3.jpg",
                correct: true,
                message: "Да! Такой вид обратной связи предоставляет четкие и детализированные советы, которые можно использовать для доработки концепции, что важно для дальнейшего развития проекта",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/designconceptnine4.jpg",
                correct: false,
                message: 'Нет, этот вид обратной связи может быть полезен для понимания положения на рынке, но он не всегда дает конструктивные рекомендации. Сравнение может не учитывать уникальные особенности вашей концепции и не указывать на конкретные шаги для ее улучшения',
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
        'Что такое дизайн-концепция?', 'Что является ключевым элементом дизайн-концепции?',
        'Как дизайн-концепция способствует согласованной работе команды?', 'Какие ключевые визуальные элементы определяет дизайн-концепция?',
        'Когда можно обойтись без детальной дизайн-концепции?', 'Что такое «мудборд» в процессе разработки дизайна?',
        'Какой метод часто используется для сбора идей и вдохновения в дизайне?', 'Какой из следующих факторов не следует учитывать при проработке концепции?',
        'Какой вид обратной связи наиболее ценен после презентации концепции?'
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
                    localStorage.setItem('test19CorrectAnswers', correctAnswers);
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
    
       
    localStorage.setItem('test19CorrectAnswers', correctAnswers);
    
        }
        
        loadQuestion();