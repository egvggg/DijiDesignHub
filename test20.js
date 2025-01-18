const tests = [
    {
        title: "Какой вид обратной связи наиболее ценен после презентации концепции?",
        images: [
            {
                src: "images/graphicsone1.jpg",
                correct: false,
                message: 'Нет, часто слишком общие и не отражают уникальные аспекты концепции, поэтому не помогают в ее улучшении',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicsone2.jpg",
                correct: false,
                message: 'Нет, они не предназначены для передачи конкретных визуальных идей и могут не содержать детальную информацию о концепции',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicsone3.jpg",
                correct: true,
                message: "Да! Векторная графика масштабируется без потери качества. Создает четкие и профессиональные изображения. Легко вносить изменения на основе отзывов. Подходит для разных платформ и устройств",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/graphicsone4.jpg",
                correct: false,
                message: 'Нет, нацелены на структуру и компоновку, но не всегда дают четкое представление о визуальной эстетике и стиле, что может ограничить креативный подход',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Какую роль играет графика в улучшении пользовательского опыта на веб-сайте?",
        images: [
            {
                src: "images/graphicstwo1.jpg",
                correct: false,
                message: 'Нет, хотя чрезмерное использование графики может отвлекать, правильно подобранная графика улучшает восприятие информации и облегчает навигацию',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicstwo2.jpg",
                correct: true,
                message: "Да! Графика выделяет ключевые элементы. Помогает визуализировать информацию. Упрощает вовлечение пользователя. Делает сайт более привлекательным и удобным",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/graphicstwo3.jpg",
                correct: false,
                message: 'Нет, текст важен, но без визуальных элементов пользователь может быстро потерять интерес; графика дополняет текст и делает контент более доступным',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicstwo4.jpg",
                correct: false,
                message: 'Нет, хотя некоторые изображения могут замедлять загрузку, оптимизированная графика улучшает внешний вид сайта и может помочь удержать пользователей, если используется правильно',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Что из нижеперечисленного является примером графического элемента в веб-дизайне?",
        images: [
            {
                src: "images/graphicsthree1.jpg",
                correct: false,
                message: 'Нет, это интерактивный элемент',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicsthree2.jpg",
                correct: false,
                message: 'Нет, это интерактивный элемент',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicsthree3.jpg",
                correct: false,
                message: 'Нет, это интерактивный элемент',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicsthree4.jpg",
                correct: true,
                message: "Да! Это визуальный элемент, который улучшает эстетический вид страницы",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        title: "Какой из перечисленных факторов влияет на выбор графики для веб-дизайна?",
        images: [
            {
                src: "images/graphicsfour1.jpg",
                correct: false,
                message: 'Нет, хотя индивидуальные предпочтения могут влиять на выбор, они не всегда учитывают целевую аудиторию и ее потребности',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicsfour2.jpg",
                correct: false,
                message: 'Нет, размер шрифта важен для читаемости текста, но он относится к типографике, а не к графическим элементам',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicsfour3.jpg",
                correct: true,
                message: "Да! Эмоциональный отклик помогает создать нужное настроение и атмосферу у пользователей, улучшая их взаимодействие с сайтом",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/graphicsfour4.jpg",
                correct: false,
                message: 'Нет, хотя цвет может оказать влияние на восприятие, он сам по себе не всегда определяет, как будет восприниматься графика',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Какой принцип важен для использования графики в веб-дизайне?",
        images: [
            {
                src: "images/graphicsfive1.jpg",
                correct: true,
                message: "Да! Уместная графика помогает донести ключевую информацию и создает гармонию с содержанием сайта, что способствует лучшему восприятию и пользовательскому опыту",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/graphicsfive2.jpg",
                correct: false,
                message: 'Нет, сложная графика может перегрузить пользовательский интерфейс и отвлечь внимание от контента. Простота и ясность часто более эффективны в веб-дизайне, поскольку они лучше воспринимаются пользователями',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicsfive3.jpg",
                correct: false,
                message: 'Нет, занимание всего экрана графикой может сделать сайт трудным для навигации и восприятия. Уместное использование пространства, а также сочетание графики с текстом и другими элементами, позволяет создать более сбалансированный и удобный интерфейс',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicsfive4.jpg",
                correct: false,
                message: 'Нет, адаптивность графики крайне важна в современном веб-дизайне, так как пользователи используют различные устройства с разными размерами экранов. Неадаптивная графика может ухудшить опыт пользователей и привести к их потере',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Какой элемент графики часто используется для создания навигации на сайте?",
        images: [
            {
                src: "images/graphicssix1.jpg",
                correct: false,
                message: 'Нет, хотя текст необходим для передачи информации, он не является интерактивным элементом. Блоки текста не обеспечивают четкого визуального обозначения действий или переходов, как это делают кнопки и иконки',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicssix2.jpg",
                correct: false,
                message: 'Нет, фоны создают атмосферу и контекст для страницы, но они не служат навигационными элементами. Фон не предоставляет пользователю возможных действий или переходов',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicssix3.jpg",
                correct: true,
                message: "Да! Кнопки и иконки часто используются для создания навигации на сайте, так как они позволяют пользователям выполнять действия (например, переходы по страницам) и визуально обозначают функции, что улучшает распознавание элементов навигации и облегчает взаимодействие с контентом",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/graphicssix4.jpg",
                correct: false,
                message: 'Нет, заголовки важны для структурирования контента и улучшения читаемости страницы, но они не предназначены для выполнения навигационных действий. Они могут указывать на тему или раздел, но не действуют как ссылки или кнопки',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Какое из следующих утверждений верно о векторной графике?",
        images: [
            {
                src: "images/graphicseven1.jpg",
                correct: false,
                message: 'Нет, векторная графика не используется для фотографий, так как фотографии состоят из растровых данных (пикселей)',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicseven2.jpg",
                correct: false,
                message: 'Нет, это относится к растровой графике, а не к векторной',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicseven3.jpg",
                correct: false,
                message: 'Нет, векторная графика широко используется в веб-дизайне, особенно для иконок, логотипов и иллюстраций',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicseven4.jpg",
                correct: true,
                message: "Да! Векторная графика основана на математических описаниях форм, линий и цветов, что позволяет ей масштабироваться до любого размера без потери качества",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        title: 'Что такое "дизайн адаптивной графики"?',
        images: [
            {
                src: "images/graphicseight1.jpg",
                correct: false,
                message: 'Нет, это не определяет адаптивность; скорее, это может указывать на особенности загрузки',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicseight2.jpg",
                correct: false,
                message: 'Нет, это не соответствует адаптивному дизайну, так как увеличение без учета устройства может привести к потере качества или неправильному отображению',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicseight3.jpg",
                correct: true,
                message: "Да! Адаптивная графика нацелена на то, чтобы оптимизировать визуальное восприятие и функциональность контента на различных устройствах, таких как мобильные телефоны, планшеты и настольные компьютеры",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/graphicseight4.jpg",
                correct: false,
                message: 'Нет, адаптивная графика предназначена не только для мобильных устройств, а для всех типов устройств, чтобы обеспечить оптимальное отображение на любом экране',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Где рекомендуется использовать фоновую графику?",
        images: [
            {
                src: "images/graphicsnine1.jpg",
                correct: true,
                message: "Да! Фоновая графика используется на страницах с текстом для создания привлекательного визуального контекста и улучшения пользовательского опыта",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/graphicsnine2.jpg",
                correct: false,
                message: 'Нет, ограничивать фоновую графику только футером нецелесообразно, так как она может использоваться и на других частях страницы для улучшения визуального восприятия',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicsnine3.jpg",
                correct: false,
                message: 'Нет, логотип обычно имеет свою собственную графику, которая не требует фонового изображения',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicsnine4.jpg",
                correct: false,
                message: 'Нет, в заголовках фоновые изображения могут создавать излишнюю загроможденность, если они не сбалансированы с текстом. Лучше использовать фоновые изображения, которые хорошо сочетаются с текстом и не затрудняют его чтение',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Где можно использовать иконки в веб-дизайне?",
        images: [
            {
                src: "images/graphicsten1.jpg",
                correct: false,
                message: 'Нет, иконки используются для обозначения разделов, но это не единственное место их применения',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicsten2.jpg",
                correct: false,
                message: 'Нет, иконки могут добавлять визуальный элемент, но использование их здесь менее распространено',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/graphicsten3.jpg",
                correct: true,
                message: "Да! Иконки могут эффективно подчеркивать важные моменты, добавлять визуальный интерес и облегчать восприятие информации. Они могут использоваться в списках, сбоку от текста или как маркеры для привлечения внимания к определенным аспектам контента",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/graphicsten4.jpg",
                correct: false,
                message: 'Нет, иконки можно использовать, но они чаще всего встречаются в виде маркеров или для выделения ключевых моментов',
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
    const questionTitle = document.getElementById('question-title21');
    
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
                    localStorage.setItem('test20CorrectAnswers', correctAnswers);
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
    
       
    localStorage.setItem('test20CorrectAnswers', correctAnswers);
    
        }
        
        loadQuestion();