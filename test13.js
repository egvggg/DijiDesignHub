const tests = [
    {
        
        title: "Что это?",
        questionImage: "images/userflowone1.jpg",
        images: [
            {
                src: "images/userflowone11.jpg",
                correct: false,
                message: "Нет, это описание контекста использования продукта, которое может включать личные цели и мотивацию пользователя, но не обязательно является последовательностью шагов",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/userflowone12.jpg",
                correct: true,
                message: "Да! User Flow представляет собой последовательность действий, которые пользователь выполняет в приложении или на сайте для достижения конкретной цели (в данном случае, заказа еды)",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/userflowone13.jpg",
                correct: false,
                message: 'Нет, это обычно описание потребностей или желаний пользователя в формате "Как [тип пользователя], я хочу [действие], чтобы [достичь цели]", и не обязательно представляется как поток шагов',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/userflowone14.jpg",
                correct: false,
                message: "Нет, это более широкое представление, охватывающее бизнес-процессы и потоки, касающиеся не только действий пользователей, но и операций внутри компании",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Что это?",
        questionImage: "images/userflowone2.jpg",
        images: [
            {
                src: "images/userflowone14.jpg",
                correct: false,
                message: "Нет, описывает последовательность действий и процессов на уровне бизнеса, включая операции и рабочие процессы, связанные с конкретной задачей",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/userflowone13.jpg",
                correct: false,
                message: 'Нет, это обычно описание потребностей или желаний пользователя в формате "Как [тип пользователя], я хочу [действие], чтобы [достичь цели]”',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/userflowone12.jpg",
                correct: false,
                message: "Нет, определяет последовательность шагов, которые пользователь предпринимает для достижения своей цели в приложении или на сайте",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/userflowone11.jpg",
                correct: true,
                message: "Да! Описание Джона, его рабочего дня и его решения заказать еду иллюстрирует конкретный сценарий использования приложения для доставки еды",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        title: "Что это?",
        questionImage: "images/userflowone3.jpg",
        images: [
            {
                src: "images/userflowone13.jpg",
                correct: true,
                message: 'Да! Это форма представления потребностей пользователя, оформленная в формате "Как [тип пользователя], я хочу [действие], чтобы [достичь цели]". "Как занятой сотрудник" — тип пользователя, "я хочу быстро заказать еду на дом" — действие, а "чтобы не готовить самостоятельно и отдохнуть после работы" — цель.',
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/userflowone11.jpg",
                correct: false,
                message: 'Нет, более расширенное описание контекста использования, включая мотивацию и конкретные действия пользователя, но не обязательно в формате "как-что, чтобы"',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/userflowone14.jpg",
                correct: false,
                message: "Нет, объединяет бизнес-процессы и операции, которые могут быть не связаны непосредственно с действиями пользователя",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/userflowone12.jpg",
                correct: false,
                message: "Нет, показывает последовательность действий пользователя для достижения цели в приложении или на сайте",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Что это?",
        questionImage: "images/userflowone4.jpg",
        images: [
            {
                src: "images/userflowone13.jpg",
                correct: false,
                message: "Нет, описание иллюстрирует операционный процесс всего бизнеса, а не только путь одного пользователя в интерфейсе",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/userflowone11.jpg",
                correct: false,
                message: "Нет, описание не следует формату user story и не фокусируется на потребностях или желаниях конкретного пользователя. Оно описывает процесс в более общем виде, без указания на потребности или цели конкретных пользователей",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/userflowone14.jpg",
                correct: true,
                message: "Да! Это процесс заказа еды через мобильное приложение, включая взаимодействие клиента, ресторана и службы доставки",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/userflowone12.jpg",
                correct: false,
                message: "Нет, описание фокусируется на пошаговом процессе выполнения бизнес-операций, а не на контексте или эмоциях пользователя во время его взаимодействия с приложением",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: "Цель составления User Flow?",
        images: [
            {
                src: "images/userflowtwo11.jpg",
                correct: false,
                message: "Нет, User Flow фокусируется на взаимодействии пользователя с продуктом, а не на распределении ресурсов внутри организации. Эффективность использования ресурсов может зависеть от бизнес-процессов, но это не основная цель User Flow",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/userflowtwo12.jpg",
                correct: false,
                message: "Нет, User Flow ориентирован на опыт пользователя, а не на внутренние процессы компании. Он описывает путь, который проходит пользователь, а не шаги, связанные с бизнес-операциями внутри организации",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/userflowtwo13.jpg",
                correct: false,
                message: "Нет, хотя лучшее понимание взаимодействия пользователя может косвенно повлиять на затраты, основная цель User Flow — не оптимизация затрат, а улучшение пользовательского опыта",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/userflowtwo14.jpg",
                correct: true,
                message: "Да! User Flow помогает выявить точки взаимодействия пользователя с продуктом, определить возможные проблемы и проанализировать, как сделать процесс более интуитивным и удобным",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
},
{
    title: "Какие ключевые аспекты должен учитывать User Flow?",
    images: [
        {
            src: "images/userflowtwo21.jpg",
            correct: false,
            message: "Нет, не все аспекты, такие как конкурентный анализ и финансовые показатели, непосредственно связаны с пользовательским взаимодействием",
            footerColor: "#FF4E51",
            icon: "images/icon1.svg"
        },
        {
            src: "images/userflowtwo22.jpg",
            correct: false,
            message: "Нет, эти аспекты относятся к бизнес-планированию и маркетингу, а не к созданию схемы пользовательского потока",
            footerColor: "#FF4E51",
            icon: "images/icon1.svg"
        },
        {
            src: "images/userflowtwo23.jpg",
            correct: false,
            message: "Нет, хотя эти аспекты важны, они не описывают непосредственно пользовательский опыт и его взаимодействие с продуктом",
            footerColor: "#FF4E51",
            icon: "images/icon1.svg"
        },
        {
            src: "images/userflowtwo24.jpg",
            correct: true,
            message: "Да! Ключевые аспекты User Flow включают понимание пользовательских целей, определение точек взаимодействия и выявление возможных препятствий для улучшения интерфейса и опыта пользователей",
            footerColor: "#4EFF84",
            icon: "images/icon.svg"
        }
    ]
},
{
    title: "Какие этапы обычно включает в себя User Flow?",
    images: [
        {
            src: "images/userflowtwo31.jpg",
            correct: false,
            message: "Нет, эти этапы относятся к стратегическому планированию бизнеса и не связаны непосредственно с пользовательским опытом или взаимодействиями",
            footerColor: "#FF4E51",
            icon: "images/icon1.svg"
        },
        {
            src: "images/userflowtwo32.jpg",
            correct: true,
            message: "Да! Эти этапы помогают понять целевую аудиторию, выявить ее цели и описать, как пользователи будут взаимодействовать с продуктом, что способствует созданию удобного и интуитивного пользовательского опыта",
            footerColor: "#4EFF84",
            icon: "images/icon.svg"
        },
        {
            src: "images/userflowtwo33.jpg",
            correct: false,
            message: "Нет, эти шаги относятся к маркетинговым стратегиям и изучению рынка. Хотя понимание пользователей может быть важно, они не описывают процесс взаимодействия пользователя с продуктом",
            footerColor: "#FF4E51",
            icon: "images/icon1.svg"
        },
        {
            src: "images/userflowtwo34.jpg",
            correct: false,
            message: "Нет, эти шаги связаны с технической частью разработки и внедрения продукта, но не фокусируются на изучении пользовательского опыта и процессе взаимодействия пользователей с продуктом",
            footerColor: "#FF4E51",
            icon: "images/icon1.svg"
        }
    ]
},
{
    title: "Что отличает User Flow от пользовательских сценариев?",
    images: [
        {
            src: "images/userflowtwo41.jpg",
            correct: true,
            message: "Да!",
            footerColor: "#4EFF84",
            icon: "images/icon.svg"
        },
        {
            src: "images/userflowtwo42.jpg",
            correct: false,
            message: "Нет,",
            footerColor: "#FF4E51",
            icon: "images/icon1.svg"
        },
        {
            src: "images/userflowtwo43.jpg",
            correct: false,
            message: "Нет,",
            footerColor: "#FF4E51",
            icon: "images/icon1.svg"
        },
        {
            src: "images/userflowtwo44.jpg",
            correct: false,
            message: "Нет,",
            footerColor: "#FF4E51",
            icon: "images/icon1.svg"
        }
    ]
},
{
    title: "Какие преимущества дает использование User Flow в разработке продукта?",
    images: [
        {
            src: "images/userflowtwo51.jpg",
            correct: false,
            message: "Нет, это не все",
            footerColor: "#FF4E51",
            icon: "images/icon1.svg"
        },
        {
            src: "images/userflowtwo52.jpg",
            correct: false,
            message: "Нет, это не все",
            footerColor: "#FF4E51",
            icon: "images/icon1.svg"
        },
        {
            src: "images/userflowtwo53.jpg",
            correct: true,
            message: "Да!",
            footerColor: "#4EFF84",
            icon: "images/icon.svg"
        },
        {
            src: "images/userflowtwo54.jpg",
            correct: false,
            message: "Нет, это не все",
            footerColor: "#FF4E51",
            icon: "images/icon1.svg"
        }
    ]
},
{
    title: "Как User Flow может помочь в принятии решений при разработке продукта?",
    images: [
        {
            src: "images/userflowtwo61.jpg",
            correct: false,
            message: "Нет, User Flow помогает не только в технических аспектах, но и в формировании бизнес-стратегий, так как понимание пользовательских действий и мотиваций влияет на общие бизнес-решения",
            footerColor: "#FF4E51",
            icon: "images/icon1.svg"
        },
        {
            src: "images/userflowtwo62.jpg",
            correct: false,
            message: "Нет, хотя User Flow действительно может помочь в оценке изменений, он также непосредственно влияет на принятие решений, так как помогает понять, какие действия будут наиболее эффективными для улучшения пользовательского опыта",
            footerColor: "#FF4E51",
            icon: "images/icon1.svg"
        },
        {
            src: "images/userflowtwo63.jpg",
            correct: true,
            message: "Да! User Flow визуализирует пользовательский путь, помогая команде выявить важные функции и ключевые этапы, что содействует более обоснованным решениям при разработке продукта",
            footerColor: "#4EFF84",
            icon: "images/icon.svg"
        },
        {
            src: "images/userflowtwo64.jpg",
            correct: false,
            message: "Нет, User Flow — это не просто инструмент визуализации; он служит основой для анализа пользовательских путей, что дает команде возможность принимать более обоснованные решения, основанные на фактическом поведении пользователей",
            footerColor: "#FF4E51",
            icon: "images/icon1.svg"
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

// Устанавливаем изображение вопроса
const questionImage = document.getElementById('questionImage');
questionImage.src = currentQuestion.questionImage;
questionImage.alt = currentQuestion.question;

 // Показываем или скрываем изображение
 questionImage.style.display = currentQuestion.questionImage ? "block" : "none";

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

    if (currentQuestion.question === "Цель составления User Flow?") {
        img.style.height = "auto"; 
        img.style.width = "100%"; 
        img.style.borderRadius = "40px";  
    } else if (currentQuestion.question === "Какие ключевые аспекты должен учитывать User Flow?") {
        img.style.height = "auto"; 
        img.style.width = "100%"; 
        img.style.borderRadius = "40px";  
    } else if (currentQuestion.question === "Какие этапы обычно включает в себя User Flow?") {
        img.style.height = "auto"; 
        img.style.width = "100%"; 
        img.style.borderRadius = "40px";  
    }  else if (currentQuestion.question === "Что отличает User Flow от пользовательских сценариев?") {
        img.style.height = "auto"; 
        img.style.width = "100%"; 
        img.style.borderRadius = "40px";  
    } else if (currentQuestion.question === "Какие преимущества дает использование User Flow в разработке продукта?") {
        img.style.height = "auto"; 
        img.style.width = "100%"; 
        img.style.borderRadius = "40px";  
    } else if (currentQuestion.question === "Как User Flow может помочь в принятии решений при разработке продукта?") {
        img.style.height = "auto"; 
        img.style.width = "100%"; 
        img.style.borderRadius = "40px";  
    } 

    if (currentQuestion.question === "Цель составления User Flow?") {
        questionTitle.style.paddingBottom = "25px";
        questionTitle.style.paddingTop = "90px";
    } else if (currentQuestion.question === "Какие ключевые аспекты должен учитывать User Flow?") {
        questionTitle.style.paddingBottom = "25px";
        questionTitle.style.paddingTop = "90px";
    } else if (currentQuestion.question === "Какие этапы обычно включает в себя User Flow?") {
        questionTitle.style.paddingBottom = "25px";
        questionTitle.style.paddingTop = "90px";
    } else if (currentQuestion.question === "Что отличает User Flow от пользовательских сценариев?") {
        questionTitle.style.paddingBottom = "25px";
        questionTitle.style.paddingTop = "90px";
    } else if (currentQuestion.question === "Какие преимущества дает использование User Flow в разработке продукта?") {
        questionTitle.style.paddingBottom = "25px";
        questionTitle.style.paddingTop = "90px";
    } else if (currentQuestion.question === "Как User Flow может помочь в принятии решений при разработке продукта?") {
        questionTitle.style.paddingBottom = "25px";
        questionTitle.style.paddingTop = "90px";
    }

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
                localStorage.setItem('test13CorrectAnswers', correctAnswers);
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

   
localStorage.setItem('test13CorrectAnswers', correctAnswers);

    }
  
    window.onload = loadQuestion; 
    loadQuestion();