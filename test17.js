const tests = [
    {
        title: "Основная цель использования гайдлайнов в дизайне?",
        images: [
            {
                src: "images/guidlineone1.jpg",
                correct: false,
                message: 'Нет, хотя гайдлайны могут казаться ограничивающими, на самом деле они направляют и упрощают процесс творчества, позволяя дизайнерам применять свои навыки в рамках согласованных стандартов',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlineone2.jpg",
                correct: false,
                message: 'Нет, наоборот, гайдлайны упрощают интерфейсы для пользователей, так как они обеспечивают согласованность и легкость восприятия',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlineone3.jpg",
                correct: true,
                message: "Да! Они служат основой для создания интуитивно понятных и эстетически привлекательных продуктов, что делает взаимодействие пользователей более гладким и понятным",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/guidlineone4.jpg",
                correct: false,
                message: 'Нет, основная цель гайдлайнов — не столько установка жестких правил, сколько создание эффективной и согласованной структуры, которая способствует высокому качеству пользовательского опыта ',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Каким образом гайдлайны способствуют повышению эффективности дизайна?",
        images: [
            {
                src: "images/guidlinetwo1.jpg",
                correct: false,
                message: 'Нет, на самом деле, они могут сыграть ключевую роль в организации рабочего процесса и улучшении результатов',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlinetwo2.jpg",
                correct: true,
                message: "Да! Гайдлайны предоставляют четкие рекомендации и стандарты, что помогает дизайнерам и разработчикам быстрее принимать решения, избегать лишних обсуждений и повторной работы",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/guidlinetwo3.jpg",
                correct: false,
                message: 'Нет, напротив, четкие ориентиры могут упростить итеративные изменения, поскольку дизайнеры могут опираться на уже установленные правила и стандарты',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlinetwo4.jpg",
                correct: false,
                message: 'Нет, хотя могут показаться ограничениями, на самом деле гайдлайны направляют и упрощают творческую работу, позволяя дизайнерам сосредоточиться на инновациях в рамках согласованных параметров',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Что включают в себя гайдлайны?",
        images: [
            {
                src: "images/guidlinethree1.jpg",
                correct: false,
                message: 'Нет, это не все',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlinethree2.jpg",
                correct: false,
                message: 'Нет, это не все',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlinethree3.jpg",
                correct: true,
                message: "Да! ",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/guidlinethree4.jpg",
                correct: false,
                message: 'Нет, это не все',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Что может произойти, если в организации отсутствуют четкие дизайн-гайдлайны?",
        images: [
            {
                src: "images/guidlinefour1.jpg",
                correct: true,
                message: "Да! Без стандартизированных принципов дизайна разные команды могут создавать неоднородные интерфейсы, что не соответствует общей стратегии бренда",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/guidlinefour2.jpg",
                correct: false,
                message: 'Нет, отсутствие гайдлайнов может привести к среднему или несогласованному дизайну, что не обязательно приведет к уникальности',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlinefour3.jpg",
                correct: false,
                message: 'Нет, наоборот, отсутствие четких гайдлайнов может замедлить работу, так как дизайнеры будут тратить больше времени на принятие решений и решение вопросов согласованности',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlinefour4.jpg",
                correct: false,
                message: 'Нет, неопределенность и необходимость доработок из-за отсутствия стандартов могут привести к увеличению затрат, а не к их снижению',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Какая главная особенность Material Design отличает его от других дизайн-систем?",
        images: [
            {
                src: "images/guidlinefive1.jpg",
                correct: false,
                message: 'Нет, хотя анимации важны в Material Design, они служат для улучшения пользовательского опыта, а не являются основной концепцией',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlinefive2.jpg",
                correct: true,
                message: "Да! Это позволяет создавать интерфейсы, вдохновленные физическими материалами, с акцентом на глубину, тени и интуитивное взаимодействие",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/guidlinefive3.jpg",
                correct: false,
                message: 'Нет, трехмерные эффекты применяются для создания визуальной иерархии, но основа все же лежит в метафоре бумаги',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlinefive4.jpg",
                correct: false,
                message: 'Нет, это важные аспекты в любой хорошей дизайн-системе, не только в Material Design',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Какая область применения является основной для Google Material Design?",
        images: [
            {
                src: "images/guidlinesix1.jpg",
                correct: false,
                message: 'Нет, хотя Material Design используется для дизайнерских решений в интерфейсах, основной фокус был изначально на мобильных приложениях',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlinesix2.jpg",
                correct: false,
                message: 'Нет, Material Design больше ориентирован на интерфейсы, чем на печатные или графические работы',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlinesix3.jpg",
                correct: false,
                message: 'Нет, хотя принципы могут применяться в этом контексте, это не было основной целью разработки Material Design',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlinesix4.jpg",
                correct: true,
                message: "Да! Material Design был создан с акцентом на пользовательские интерфейсы для мобильных устройств, включая Android-приложения. Его принципы и компоненты обеспечивают однородный и интуитивный опыт. Хотя они могут применяться и в веб-приложениях, основной фокус изначально был на мобильных",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        title: "Какова основная цель Apple Human Interface Guidelines?",
        images: [
            {
                src: "images/guidlineseven1.jpg",
                correct: false,
                message: 'Нет, хотя рекомендации способствуют эстетике Apple, их основная цель — не просто создание уникального стиля, а обеспечение согласованности и удобства использования',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlineseven2.jpg",
                correct: false,
                message: 'Нет, хотя эти рекомендации действительно помогают создать согласованную систему, их основной фокус заключается именно в единообразии и удобстве для пользователей',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlineseven3.jpg",
                correct: false,
                message: 'Нет, хотя соблюдение рекомендаций может упростить работу разработчиков, основной целью является не ускорение разработки, а создание согласованного и удобного интерфейса для пользователей',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlineseven4.jpg",
                correct: true,
                message: "Да! Эти рекомендации помогают разработчикам создавать приложения, которые соответствуют стандартам Apple, обеспечивая комплексный и согласованный пользовательский опыт на всех устройствах и платформах компании",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        title: "Какая основная особенность дизайна Apple продуктов в соответствии с HIG?",
        images: [
            {
                src: "images/guidlineight1.jpg",
                correct: false,
                message: 'Нет, хотя Apple действительно использует анимации, основной акцент HIG сосредоточен на интуитивном взаимодействии и удобстве использования, а не на сложности анимаций',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlineight2.jpg",
                correct: false,
                message: 'Нет, трехмерные эффекты могут использоваться в некоторых случаях, но основная цель заключается в создании удобного и понятного интерфейса, а не в эффектности',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlineight3.jpg",
                correct: true,
                message: "Да! Apple делает упор на то, чтобы интерфейсы были простыми для восприятия и легкими в использовании, обеспечивая пользователям интуитивный опыт взаимодействия с устройствами",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/guidlineight4.jpg",
                correct: false,
                message: 'Нет, хотя адаптивность и отзывчивость важны, они представляют собой часть общей стратегии создания интуитивного интерфейса, который приоритетен для HIG',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Какой из подходов к дизайну более ориентирован на метафору физического мира?",
        images: [
            {
                src: "images/guidlinenine1.jpg",
                correct: false,
                message: 'Нет, хотя в этом подходе тоже используются элементы физической метафоры, он больше фокусируется на интуитивных жестах и взаимодействиях, а не так явно использует концепции физического мира, как Material Design',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlinenine2.jpg",
                correct: false,
                message: 'Нет, это неверно, так как оба подхода действительно используют метафоры, но Google Material Design делает это более заметным образом',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlinenine3.jpg",
                correct: true,
                message: 'Да! Этот подход более ориентирован на метафору физического мира, используя концепции, такие как "материал" и физические свойства объектов для создания интуитивного пользовательского интерфейса',
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/guidlinenine4.jpg",
                correct: false,
                message: 'Нет, хотя оба используют физические метафоры, Material Design делает это более акцентированно и явно, что позволяет лучше визуализировать взаимодействия пользователей с интерфейсом',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Какой из подходов к дизайну в большей степени акцентирует принцип единообразия?",
        images: [
            {
                src: "images/guidlineten1.jpg",
                correct: false,
                message: 'Нет, аналогичные принципы единообразия применимы и в Google Material Design',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlineten2.jpg",
                correct: false,
                message: 'Нет, хотя этот подход акцентирует внимание на единообразии, утверждение было бы неполным, так как Apple HIG также делает акцент на этом принципе',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlineten3.jpg",
                correct: false,
                message: 'Нет, оба подхода действительно уделяют внимание единообразию',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/guidlineten4.jpg",
                correct: true,
                message: "Да! Единообразие помогает пользователям легче ориентироваться в интерфейсах и использовать приложения, создавая предсказуемый и интуитивно понятный опыт",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
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
                    localStorage.setItem('test17CorrectAnswers', correctAnswers);
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
    
       
    localStorage.setItem('test17CorrectAnswers', correctAnswers);
    
        }
        
        loadQuestion();