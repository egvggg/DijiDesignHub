const tests = [
    {
        question: "Продуктовый подход",
        questionImage: "images/hardskills1.jpg",
        images: [
            {
                src: "images/hardskills11.jpg",
                correct: true,
                message: "Да! Дизайнеры основывают свою работу на анализе потребностей пользователей и создают интуитивно понятную навигацию, удобную структуру категорий и оптимизированный процесс оформления заказа",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/hardskills12.jpg",
                correct: false,
                message: "Нет, дизайнеры игнорируют реальные потребности пользователей, полагаясь только на общие указания, что приводит к отсутствию анализа и исследований. Основное внимание уделяется эстетике, а не удобству и функциональности сайта, и отсутствует тестирование прототипов с реальными пользователями, что приводит к игнорированию обратной связи",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Продуктовый подход",
        questionImage: "images/hardskills2.jpg",
        images: [
            {
                src: "images/hardskills11.jpg",
                correct: false,
                message: "Нет, отсутствие взаимодействия с другими специалистами и игнорирование обратной связи от целевой аудитории приводит к тому, что конечный продукт может не соответствовать ожиданиям пользователей и не решает их реальные проблемы",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/hardskills12.jpg",
                correct: true,
                message: "Да! Команда стартапа включает в себя разнообразных специалистов, которые активно взаимодействуют на всех этапах разработки. Это взаимодействие позволяет глубже понять потребности пользователей и создавать решение, максимально соответствующее этим потребностям",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        question: "Продуктовый подход",
        questionImage: "images/hardskills3.jpg",
        images: [
            {
                src: "images/hardskills11.jpg",
                correct: false,
                message: "Нет, при продуктовом подходе важно постоянно собирать и анализировать обратную связь для выявления проблем и нужд пользователей, а также вносить необходимые коррективы в дизайн. Игнорирование полученных отзывов и отсутствие итеративного подхода к улучшению продукта приводит к тому, что сайт не адаптируется под реальные потребности пользователей",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/hardskills12.jpg",
                correct: true,
                message: "Да! Это продуктовый подход, потому что команда активно отслеживает поведение пользователей и собирает их отзывы после внедрения начальной версии платформы",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        question: "Визуальные коммуникации",
        questionImage: "images/hardskills4.jpg",
        images: [
            {
                src: "images/hardskills11.jpg",
                correct: false,
                message: "Нет, визуальные коммуникации должны облегчать восприятие информации, привлекать внимание к ключевым сообщениям и делать контент более доступным для пользователей. В данном случае, избыточный и плохо организованный текст вызывает утомление и затрудняет восприятие, что противоречит принципам хорошего визуального дизайна",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/hardskills12.jpg",
                correct: true,
                message: "Да! Простая, но стильная типографика в заголовках и описаниях товаров, подкрепленная яркими графическими иконками, делает текст легко читаемым и интуитивно понятным, что усиливает эффективность визуальных коммуникаций и улучшает пользовательский опыт",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        question: "Визуальные коммуникации",
        questionImage: "images/hardskills5.jpg",
        images: [
            {
                src: "images/hardskills11.jpg",
                correct: true,
                message: "Да! Использование нежных, пастельных оттенков, гармонично сочетающихся с детской тематикой, создает соответствующее настроение и эмоциональную атмосферу",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/hardskills12.jpg",
                correct: false,
                message: "Нет, использование темных и мрачных тонов на сайте не соответствует ожиданиям и потребностям целевой аудитории, особенно когда речь идет о здоровье и комфорте пациентов. Цвета играют важную роль в создании эмоционального восприятия, и мрачная палитра может вызывать негативные ассоциации, такие как страх или тревога, что нежелательно в контексте медицинских услуг",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Коммуникативные навыки",
        questionImage: "images/hardskills6.jpg",
        images: [
            {
                src: "images/hardskills11.jpg",
                correct: true,
                message: "Да! Дизайнеры заранее продумывают структуру презентации, что обеспечивает ясность и последовательность. Они начинают с ключевых исходных данных, подробно объясняют концепцию и в завершение подчеркивают, как финальный продукт соответствует бизнес-целям клиента, что усиливает аргументацию и способствует успешному взаимодействию",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/hardskills12.jpg",
                correct: false,
                message: "Нет, дизайнеры не уделяют должного внимания структуре и логике подачи презентации. Начало с демонстрации макетов без контекстуальных пояснений, торопливый переход между экранами, отсутствие прототипов и схем пользовательских сценариев, а также недостаточное акцентирование на том, как продукт поможет в достижении бизнес-задач заказчика затрудняют восприятие информации и уменьшают понимание ценности предложенной концепции",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Гибкость и адаптивность",
        questionImage: "images/hardskills7.jpg",
        images: [
            {
                src: "images/hardskills11.jpg",
                correct: true,
                message: "Да! Дизайнеры организуют интервью с потенциальными пользователями для глубокого изучения их потребностей и пожеланий. Внимательное выслушивание комментариев и фиксирование инсайтов показывает готовность адаптироваться и корректировать проект в соответствии с ожиданиями пользователей",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/hardskills12.jpg",
                correct: false,
                message: "Нет, дизайнеры проводят лишь несколько кратких встреч и не пытаются глубоко понять потребности целевой аудитории. Такой подход ограничивает возможность адаптировать проект и может привести к несоответствию продукта ожиданиям пользователей",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Гибкость и адаптивность",
        questionImage: "images/hardskills8.jpg",
        images: [
            {
                src: "images/hardskills11.jpg",
                correct: false,
                message: "Нет, дизайнеры занимают оборонительную позицию, сдержанно отвечают на вопросы и не проявляют готовности к диалогу. Такой подход ограничивает возможность учесть мнения заказчика и вносить изменения в проект",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/hardskills12.jpg",
                correct: true,
                message: "Да! Дизайнеры открыты к критике и предложениям заказчика. Их готовность вести активный диалог и фиксировать комментарии свидетельствует о стремлении учитывать мнение клиента и при необходимости вносить изменения в проект",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
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
    
    
    
        let correctAnswers = 0; // Инициализируем счетчик
    
        function loadQuestion() {
            const currentQuestion = tests[currentQuestionIndex];

    // Устанавливаем заголовок в зависимости от текущего вопроса
    questionTitle.textContent = currentQuestion.question || "Вопрос не найден";

    // Устанавливаем изображение вопроса
    const questionImage = document.getElementById('questionImage');
    questionImage.src = currentQuestion.questionImage;
    questionImage.alt = currentQuestion.question;

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

        // Добавляем обработчик события на клик
        img.addEventListener('click', () => {
            showPopup(img); // обеспечьте, что этот метод работает
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
                    localStorage.setItem('test11CorrectAnswers', correctAnswers);
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
    
       
    localStorage.setItem('test11CorrectAnswers', correctAnswers);
    
        }
        window.onload = loadQuestion; 
        loadQuestion();