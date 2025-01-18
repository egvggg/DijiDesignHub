const tests = [
    {
        title: "Какой метод обучения наиболее эффективен для освоения веб-дизайна?",
        question: "Вопрос 1",
        images: [
            {
                src: "images/firsttest11.jpg",
                correct: false,
                message: 'Нет, хотя семинары и мастер-классы могут предоставить полезную информацию и общение с экспертами, отсутствие практических заданий не позволит участникам закрепить изучаемый материал',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/firsttest12.jpg",
                correct: false,
                message: 'Нет, хотя чтение книг и статей является важным для формирования теоретических знаний, это может быть недостаточно для эффективного освоения практических навыков веб-дизайна',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/firsttest13.jpg",
                correct: true,
                message: "Да! Практическое применение знаний и работа над реальными проектами способствуют лучшему пониманию концепций дизайна",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/firsttest14.jpg",
                correct: false,
                message: 'Нет, просмотр видеолекций может предоставить ценные знания и вдохновение, но без практического применения этих знаний ты рискуешь не освоить необходимые навыки',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Какой из этих факторов важен для поддержания мотивации при обучении дизайну?",
        question: "Вопрос 2",
        images: [
            {
                src: "images/firsttest21.jpg",
                correct: false,
                message: 'Нет, пассивное изучение, такое как простое чтение или просмотр видео без активного вовлечения, маловероятно поддерживает мотивацию. Для эффективного обучения необходимо активное взаимодействие с материалом, такое как практика, обсуждение и применение полученных знаний',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/firsttest22.jpg",
                correct: true,
                message: "Да! Четкие цели помогают определить направление обучения и дают ощущение достижения. Это позволяет поддерживать мотивацию и обеспечивает более системный подход к изучению дизайна",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/firsttest23.jpg",
                correct: false,
                message: 'Нет, непредсказуемый график может привести к стрессу и недостатку стабильности, что отрицательно скажется на мотивации. Примерный распорядок дня и регулярность занятий помогают сохранить фокус и оптимизм в обучении',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/firsttest24.jpg",
                correct: false,
                message: 'Нет, сосредоточение только на популярных трендах может привести к поверхностному пониманию темы и недостатку глубины в знаниях',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Что является важным элементом в создании успешного портфолио дизайнера?",
        question: "Вопрос 3",
        images: [
            {
                src: "images/firsttest31.jpg",
                correct: false,
                message: 'Нет, хотя важно не перегружать портфолио, жесткое ограничение до 5 проектов может не позволить показать весь спектр навыков и опыта дизайнера',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/firsttest32.jpg",
                correct: false,
                message: 'Нет, наличие слишком большого количества работ может привести к перегруженности и запутанности портфолио. Важно акцентировать внимание на качественных и актуальных проектах, а не просто на количественном показателе',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/firsttest33.jpg",
                correct: true,
                message: "Да! Успешное портфолио должно демонстрировать разнообразие стилей и проектных подходов, а также давать понимание личного дизайнера и его уникальной точки зрения. Это делает портфолио более привлекательным для потенциальных клиентов или работодателей",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/firsttest34.jpg",
                correct: false,
                message: 'Нет, хотя описание работы важно, оно без учета личного стиля и разнообразия проектов не дает полного представления о дизайнере',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Какова основная цель пользовательского исследования в дизайне?",
        question: "Вопрос 4",
        images: [
            {
                src: "images/firsttest41.jpg",
                correct: true,
                message: "Да! Пользовательское исследование помогает дизайнерам углубиться в поведение и потребности целевой аудитории. Это критически важно для создания эффективного и удобного пользовательского опыта, так как позволяет учесть предпочтения и тестировать гипотезы",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/firsttest42.jpg",
                correct: false,
                message: 'Нет, это  административный вопрос, не относящийся к целям пользовательского исследования. Пользовательские исследования фокусируются на взаимодействии пользователей с продуктом',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/firsttest43.jpg",
                correct: false,
                message: 'Нет, оценка навыков дизайнера не является целью пользовательского исследования. Такое исследование направлено на понимание поведения и предпочтений пользователей',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/firsttest44.jpg",
                correct: false,
                message: 'Нет, исследование пользователей сосредоточено на потребностях конкретных пользователей, а не на общем анализе трендов, которые могут быть временнымит',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: 'Какой из следующих подходов к дизайну наилучшим образом отражает концепцию "дизайна с учетом пользователя"?',
        question: "Вопрос 5",
        images: [
            {
                src: "images/firsttest51.jpg",
                correct: false,
                message: 'Нет, этот подход ориентирован на личные вкусы дизайнера, а не на реальные потребности и желания пользователей. Дизайн с учетом пользователя должен основываться на мнении и опыте пользователей',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/firsttest52.jpg",
                correct: true,
                message: "Да! Понимание потребностей, предпочтений и поведения пользователей позволяет дизайнерам создать продукт, который соответствует ожиданиям и требованиям целевой аудитории",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/firsttest53.jpg",
                correct: false,
                message: 'Нет, это может привести к недостаточной персонализации. Шаблоны могут быть эффективными, но если они не учитывают потребности и особенности конечных пользователей',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/firsttest54.jpg",
                correct: false,
                message: 'Нет, игнорирование тестирования означает отказ от обратной связи от пользователей, что противоречит концепции дизайна с учетом пользователя. Тестирование помогает выявить проблемы и улучшить интерфей',
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
                    localStorage.setItem('test21CorrectAnswers', correctAnswers);
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
    
       
    localStorage.setItem('test21CorrectAnswers', correctAnswers);
    
        }
        
        loadQuestion();