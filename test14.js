const tests = [
    {
        question: "Вопрос 1",
        images: [
            {
                src: "images/cjmone11.jpg",
                correct: false,
                message: "Нет, это описание внутренних процессов, но Customer Journey Map фокусируется именно на опыте клиента, а не на внутренних процессах компании",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmone12.jpg",
                correct: false,
                message: "Нет, хотя Customer Journey Map может помочь в понимании потребностей клиентов, его основная цель — визуализировать путь клиента, а не проводить сегментацию",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmone13.jpg",
                correct: true,
                message: "Да! Customer Journey Map (карта пути клиента) — это инструмент, визуализирующий все этапы взаимодействия клиента с компанией, от первого контакта до пост-продажного обслуживания. Она помогает понять клиентский опыт, выявить болевые точки и улучшить взаимодействие",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/cjmone14.jpg",
                correct: false,
                message: "Нет, это описание другой модели, связанной с анализом клиента и его ценности для бизнеса. Customer Journey Map не предназначена для прогнозирования, а для понимания текущего опыта клиента",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 2",
        images: [
            {
                src: "images/cjmtwo11.jpg",
                correct: true,
                message: "Да! CJM фокусируется на понимании и улучшении взаимодействия клиента с компанией, что в свою очередь способствует созданию положительного опыта и повышению лояльности клиентов",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/cjmtwo12.jpg",
                correct: false,
                message: "Нет, хотя CJM может способствовать росту продаж, ее основная цель — это улучшение клиентского опыта",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmtwo13.jpg",
                correct: false,
                message: "Нет,CJM сфокусирована на понимании и улучшении клиентского опыта, а не на оптимизации внутренних процессов компании, игнорируя потребности клиентов",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmtwo14.jpg",
                correct: false,
                message: "Нет, CJM не предназначена для создания базы данных; это инструмент для визуализации клиентского опыта и пути",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 3",
        images: [
            {
                src: "images/cjmthree11.jpg",
                correct: false,
                message: "Нет, CJM может быть полезна на всех этапах разработки, включая исследование, проектирование и тестирование",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmthree12.jpg",
                correct: false,
                message: "Нет, CJM следует использовать только после создания User Persona и User Flow, не отражает фактическое взаимодействие и взаимодополнение этих инструментов в процессе проектирования",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmthree13.jpg",
                correct: true,
                message: "Да! Эти инструменты дополняют друг друга, помогая глубже понять пользователей и их поведение на различных этапах взаимодействия с продуктом",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/cjmthree14.jpg",
                correct: false,
                message: "Нет, CJM не является отдельным методом; она интегрируется и взаимодействует с другими инструментами UX-дизайна для достижения лучших результатов",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 4",
        images: [
            {
                src: "images/cjmfour11.jpg",
                correct: false,
                message: "Нет, этот вариант может подразумевать более эмоциональные аспекты пути клиента, но не включает все ключевые стадии, такие как обдумывание и сравнение",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmfour12.jpg",
                correct: true,
                message: "Да! Этот вариант описывает все ключевые стадии типичного пути клиента",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/cjmfour13.jpg",
                correct: false,
                message: "Нет, этот вариант представляет собой более широкий подход, включающий не только покупку, но и постпокупочные действия, но не фокусируется на стадии принятия решения покупателем",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmfour14.jpg",
                correct: false,
                message: "Нет, каждый из предложенных вариантов описывает путь клиента по-разному и фокусируется на различных аспектах",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 5",
        images: [
            {
                src: "images/cjmfive11.jpg",
                correct: false,
                message: "Нет, здесь важно привлечь внимание. Клиенты просто начинают узнавать о продукте, и эмоции могут помочь, но они не так критичны, как на этапе сравнения",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmfive12.jpg",
                correct: false,
                message: "Нет, клиенты ищут конкретные факты и характеристики. Акцент на рациональной информации снижает роль эмоций",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmfive13.jpg",
                correct: false,
                message: "Нет, клиенты уже готовы сделать выбор. Эмоции важны, но в основном в контексте удовлетворения от завершения сделки, а не для сравнения вариантов",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmfive14.jpg",
                correct: true,
                message: "Да! На этом этапе клиент сравнивает продукты и его восприятие бренда может сильно повлиять на выбор. Положительные эмоции и отзывы могут склонить клиента к выбору твоего продукта среди конкурентов.",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        question: "Вопрос 6",
        images: [
            {
                src: "images/cjmsix11.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmsix12.jpg",
                correct: true,
                message: "Да!",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/cjmsix13.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmsix14.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 7",
        images: [
            {
                src: "images/cjmseven11.jpg",
                correct: false,
                message: "Нет, на этом этапе клиент просто знакомится с продуктом. Хотя это важно для привлечения внимания, непосредственной прибыли не приносит",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmseven12.jpg",
                correct: false,
                message: "Нет, клиенты ищут информацию, но на этом этапе они еще не готовы к покупке. Компания не получает дохода, пока не произойдет покупка",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmseven13.jpg",
                correct: true,
                message: "Да! Этап покупки — это момент, когда компания получает прибыль. Клиенты принимают окончательное решение, и важна гладкость процесса, чтобы избежать отказа от сделки. Успешная покупка способствует повторным покупкам и лояльности клиентов",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/cjmseven14.jpg",
                correct: false,
                message: "Нет, клиенты сравнивают различные варианты, что действительно важно для выбора. Однако даже если клиент выбрал ваш продукт, чистая прибыль будет реализована только в момент покупки",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 8",
        images: [
            {
                src: "images/cjmeight11.jpg",
                correct: false,
                message: "Нет, хотя дизайн привлекает внимание, на этом этапе важно не только визуальное оформление, но и качественный контент, который объясняет, что представляет собой продукт",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmeight12.jpg",
                correct: true,
                message: "Да! На этапе сравнения дизайн играет ключевую роль, так как визуально представляет характеристики продукта, помогает выделиться среди конкурентов и вызывает доверие у клиентов, что влияет на их окончательное решение о покупке",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/cjmeight13.jpg",
                correct: false,
                message: "Нет, дизайн важен, но акцент смещается на содержание и детали продукта. Эффективность зависит больше от информации, чем от визуального представления",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmeight14.jpg",
                correct: false,
                message: "Нет, на этом этапе важно оформление процесса покупки и удобство интерфейса. Дизайн уже не является основным фактором, поскольку клиент обычно принял решение о покупке",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 9",
        images: [
            {
                src: "images/cjmnine11.jpg",
                correct: true,
                message: "Да! Это дает основу для анализа и выявления потребностей клиентов",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/cjmnine12.jpg",
                correct: false,
                message: "Нет, это важный шаг, но без данных о текущем клиентском опыте трудно понять, как именно взаимодействует аудитория с продуктом",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmnine13.jpg",
                correct: false,
                message: "Нет, этот этап следует проводить после сбора данных. Без исходных данных аналитика будет неполной или ошибочной",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmnine14.jpg",
                correct: false,
                message: "Нет, визуализация важна, но она основана на собранных данных. Без качественной информации карта не будет эффективной",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        question: "Вопрос 10",
        images: [
            {
                src: "images/cjmten11.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmten12.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmten13.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/cjmten14.jpg",
                correct: true,
                message: "Да!",
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
    
    const questionTitles = [
        "Что такое Customer Journey Map?", "Основная цель построения CJM?",
        "Как Customer Journey Map связан с другими инструментами UX-дизайна?", "Какие основные этапы включает в себя типичный путь клиента к покупке?",
        "На каком этапе пути клиента к покупке важно сфокусироваться на его эмоциях и восприятии?", "Что может помешать клиенту совершить покупку на ключевом этапе пути?",
        "Какой этап пути клиента к покупке является наиболее важным для компании?", "На каком этапе пути клиента к покупке дизайн играет наиболее важную роль?",
        "Какой из этих шагов является ключевым при составлении Customer Journey Map?", "Какая из этих эмоций клиента является наиболее важной для отражения в CJM?"
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
                    localStorage.setItem('test14CorrectAnswers', correctAnswers);
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
    
       
    localStorage.setItem('test14CorrectAnswers', correctAnswers);
    
        }
        
        loadQuestion();