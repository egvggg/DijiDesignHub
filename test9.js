const tests = [
    {
        question: "Вопрос 1",
        images: [
            {
                src: "images/FittsLaw1.jpg",
                correct: false,
                message: "Нет, выбор цветовой схемы основывается на теориях цветового восприятия, психологии цвета и брендовых рекомендациях, а не на Законe Фиттса",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/FittsLaw2.jpg",
                correct: false,
                message: "Нет, оптимальная длина текста обычно определяется с учетом восприятия информации, читабельности и когнитивной нагрузки, но не связана напрямую с Законом Фиттса",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/FittsLaw3.jpg",
                correct: false,
                message: "Нет, скорость загрузки веб-страниц зависит от множества факторов, включая размер изображений, количество запросов к серверу и оптимизацию кода, и это не относится к законопроекту Фиттса",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/FittsLaw4.jpg",
                correct: true,
                message: "Да! Этот закон утверждает, что время, необходимое для достижения цели (например, кнопки или ссылки), зависит от расстояния до нее и размера цели",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        question: "Вопрос 2",
        images: [
            {
                src: "images/FittsLaw5.jpg",
                correct: true,
                message: "Да! Большие элементы требуют меньшего времени для достижения, поскольку на них проще навести указатель. В то же время, меньшие элементы требуют большей точности при наведении, что может замедлить взаимодействие",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/FittsLaw6.jpg",
                correct: false,
                message: 'Нет, на меньшие элементы труднее "попасть"',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/FittsLaw7.jpg",
                correct: false,
                message: "Нет, чем больше элемент, тем легче до него добраться, так как у пользователя больше пространства для маневра при наведении указателя",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/FittsLaw8.jpg",
                correct: false,
                message: "Нет, это утверждение верно, но по своему контексту не соответствует духу Закона Фиттса",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 3",
        images: [
            {
                src: "images/Usability1.jpg",
                correct: true,
                message: "Да! Это самое точное определение юзабилити, так как оно включает в себя легкость, с которой пользователи могут освоить и эффективно использовать продукт",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/Usability2.jpg",
                correct: false,
                message: 'Нет,  хотя доступность важна, она относится больше к инклюзии и возможности использования продукта разными категориями пользователей',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Usability3.jpg",
                correct: false,
                message: "Нет, это аспект дизайна, который может влиять на восприятие продукта, но не определяет юзабилити",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Usability4.jpg",
                correct: false,
                message: "Нет,  важный аспект, так как интерфейс должен выполнять свои функции, но функциональность сама по себе не является полным определением юзабилити",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 4",
        images: [
            {
                src: "images/Usability5.jpg",
                correct: true,
                message: "Да! Удобный и интуитивно понятный интерфейс способствует положительному опыту пользователей, что увеличивает их удовлетворенность продуктом",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/Usability6.jpg",
                correct: false,
                message: 'Нет, высокое юзабилити является ключевым фактором удовлетворенности',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Usability7.jpg",
                correct: false,
                message: "Нет,  сложный интерфейс может привести к разочарованию пользователей и снижению удовлетворенности",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Usability8.jpg",
                correct: false,
                message: "Нет, юзабилити включает в себя не только дизайн, но и общую эффективность и степень удобства использования продукта",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 5",
        images: [
            {
                src: "images/Interaction1.jpg",
                correct: false,
                message: 'Нет, это определение больше относится к интеграции систем, а не к взаимодействию пользователя с интерфейсом',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Interaction2.jpg",
                correct: false,
                message: 'Нет, хотя это важный аспект процесса разработки, это не определяет само взаимодействие',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Interaction3.jpg",
                correct: true,
                message: "Да! Этот вариант четко определяет взаимодействие как процесс коммуникации между пользователем и системой, что включает в себя все действия, которые пользователь выполняет, и отклики системы на эти действия",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/Interaction4.jpg",
                correct: false,
                message: "Нет, это важный аспект дизайна, но он не охватывает весь спектр определения взаимодействия",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 6",
        images: [
            {
                src: "images/Interaction5.jpg",
                correct: false,
                message: 'Нет, хотя эти элементы важны для дизайна, они не являются основными компонентами взаимодействия',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Interaction6.jpg",
                correct: false,
                message: 'Нет, эти роли важны в процессе разработки, но не представляют собой компоненты взаимодействия',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Interaction7.jpg",
                correct: true,
                message: "Да! Пользователь — это тот, кто взаимодействует с продуктом или системой.  Устройство — это аппаратное обеспечение (например, компьютер, смартфон и т.д.), через которое пользователь взаимодействует с интерфейсом. Интерфейс — это средство, с помощью которого пользователь взаимодействует с устройством и контентом",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/Interaction8.jpg",
                correct: false,
                message: "Нет, эти аспекты важны для оценки системы, но не являются основными компонентами взаимодействия в дизайне",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    }, 
    {
        question: "Вопрос 7",
        images: [
            {
                src: "images/Navigation1.jpg",
                correct: true,
                message: "Да! Навигацию помогает пользователю понимать, где он находится в продукте, и как ему перемещаться между различными частями интерфейса",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/Navigation2.jpg",
                correct: false,
                message: 'Нет, это определение ограничивает понятие навигации только её визуальными элементами, в то время как навигация также включает в себя концептуальное понимание структуры',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Navigation3.jpg",
                correct: false,
                message: "Нет, это определение относится скорее к дизайну страниц, чем к навигации как таковой",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Navigation4.jpg",
                correct: false,
                message: "Нет, это более общее понятие, которое охватывает все формы взаимодействия, а не только навигацию",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 8",
        images: [
            {
                src: "images/Navigation5.jpg",
                correct: false,
                message: 'Нет, эти элементы больше связаны с контентом и представлением информации, чем с навигацией',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Navigation6.jpg",
                correct: false,
                message: 'Нет, хотя они помогают структурировать контент, они не являются основными элементами навигации',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Navigation7.jpg",
                correct: false,
                message: "Нет, эти элементы предназначены для визуализации данных и информации, а не для навигации",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Navigation8.jpg",
                correct: true,
                message: "Да! Эти элементы являются ключевыми компонентами, которые помогают пользователям перемещаться по интерфейсу и находить необходимую информацию или функционал",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        question: "Вопрос 9",
        images: [
            {
                src: "images/Micro-interactions1.jpg",
                correct: false,
                message: 'Нет, это одна из форм микровзаимодействия',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Micro-interactions2.jpg",
                correct: false,
                message: 'Нет, это одна из форм микровзаимодействия',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Micro-interactions3.jpg",
                correct: true,
                message: "Да!",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/Micro-interactions4.jpg",
                correct: false,
                message: "Нет, это одна из форм микровзаимодействия",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 10",
        images: [
            {
                src: "images/Micro-interactions5.jpg",
                correct: false,
                message: 'Нет, не только эти примеры',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Micro-interactions6.jpg",
                correct: true,
                message: "Да!",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/Micro-interactions7.jpg",
                correct: false,
                message: 'Нет, не только эти примеры',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Micro-interactions8.jpg",
                correct: false,
                message: "Нет, не только эти примеры",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 11",
        images: [
            {
                src: "images/Components1.jpg",
                correct: true,
                message: "Да! Они определяют, как пользователи будут взаимодействовать с системой, где находиться информация и как пользователи смогут перемещаться по интерфейс",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/Components2.jpg",
                correct: false,
                message: 'Нет, компоненты интерфейса имеют значительное влияние на юзабилити',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Components3.jpg",
                correct: false,
                message: 'Нет, хотя компоненты могут влиять на визуальное оформление, их роль шире и касается взаимодействия пользователей',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Components4.jpg",
                correct: false,
                message: "Нет, компоненты также влияют на пользовательский интерфейс и взаимодействие, и не ограничиваются только техническими аспектами",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 12",
        images: [
            {
                src: "images/Branding1.jpg",
                correct: false,
                message: 'Нет, не только это',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Branding2.jpg",
                correct: false,
                message: 'Нет, не только это',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Branding3.jpg",
                correct: false,
                message: 'Нет, не только это',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Branding4.jpg",
                correct: true,
                message: "Да!",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        question: "Вопрос 13",
        images: [
            {
                src: "images/Branding5.jpg",
                correct: false,
                message: 'Нет, хотя визуальная привлекательность важна, брендинг охватывает гораздо более широкие аспекты, включая эмоциональные и психологические',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Branding6.jpg",
                correct: true,
                message: "Да! Брендинг не только создает визуальные элементы, но и формирует образы, эмоции и ассоциации, вызываемые у пользователей",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/Branding7.jpg",
                correct: false,
                message: 'Нет, брендинг не ограничивается функциональностью; он влияет на восприятие и ценности, которые стоят за продуктом или услугой',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Branding8.jpg",
                correct: false,
                message: 'Нет',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 14",
        images: [
            {
                src: "images/Fidelity1.jpg",
                correct: false,
                message: 'Нет, не только это',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Fidelity2.jpg",
                correct: false,
                message: 'Нет, не только это',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Fidelity3.jpg",
                correct: true,
                message: "Да!",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/Fidelity4.jpg",
                correct: false,
                message: 'Нет, не только это',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 15",
        images: [
            {
                src: "images/Fidelity5.jpg",
                correct: false,
                message: 'Нет, не только это',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Fidelity6.jpg",
                correct: true,
                message: "Да!",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/Fidelity7.jpg",
                correct: false,
                message: 'Нет, не только это',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/Fidelity8.jpg",
                correct: false,
                message: 'Нет, не только это',
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
        "Для чего закон Фиттса используется в UX-дизайне?", "Как закон Фиттса влияет на размеры элементов интерфейса?",
        "Что такое юзабилити?", "Как юзабилити связана с удовлетворенностью пользователей?",
        "Что такое взаимодействие?", "Какие основные компоненты включает в себя взаимодействие в дизайне?",
        "Что такое навигация?", "Какие элементы могут входить в систему навигации интерфейса?",
        "Что такое микровзаимодействие?", "Какие примеры микровзаимодействий можно встретить в современных интерфейсах?",
        "Как компоненты влияют на общую концепцию и юзабилити интерфейса?", " Что такое брендинг?",
        "Как брендинг связан с восприятием пользователей?", " Что такое детализация?",
        "Где применяется детализация в интерфейсах?"
    
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
                    localStorage.setItem('test9CorrectAnswers', correctAnswers);
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
    
       
    localStorage.setItem('test9CorrectAnswers', correctAnswers);
    
        }
        
        loadQuestion();