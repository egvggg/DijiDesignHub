const tests = [
    {
        title: 'Цель паттерна "Действие-Отмена"?',
        images: [
            {
                src: "images/patternone11.jpg",
                correct: false,
                message: "Нет, его основная функция не заключается в повышении эффективности, а в обеспечении возможности вернуться назад и исправить ошибки",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternone12.jpg",
                correct: true,
                message: "Да! Этот паттерн позволяет пользователям легко исправлять ошибки или возвращаться к предыдущему состоянию, что делает взаимодействие с интерфейсом более удобным и безопасным",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/patternone13.jpg",
                correct: false,
                message: 'Нет, паттерн "Действие-Отмена" не имеет прямого отношения к визуальному дизайну. Это функциональная возможность, которая не влияет на эстетику интерфейса',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternone14.jpg",
                correct: false,
                message: 'Нет, паттерн "Действие-Отмена" не предназначен для упрощения навигации. Он служит, чтобы дать пользователю возможность откатывать изменения, а не для улучшения структуры навигации',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: 'Какая из этих ситуаций наиболее подходит для применения паттерна "Действие-Отмена"?',
        images: [
            {
                src: "images/patternone21.jpg",
                correct: false,
                message: "Нет, хотя пользователи могут захотеть отменить изменения темы, это действие не имеет серьезных последствий",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternone22.jpg",
                correct: false,
                message: "Нет, если загрузка фотографий не завершена, пользователь может просто отменить процесс загрузки",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternone23.jpg",
                correct: false,
                message: 'Нет, хотя здесь может быть функция "Отмена", большинство действий, таких как ввод данных платежа, требует четкого подтверждения от пользователя',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternone24.jpg",
                correct: true,
                message: "Да! При изменении настроек конфиденциальности пользователю важно иметь возможность отменить свои действия, так как неверные настройки могут привести к утечке личной информации или другим нежелательным последствиям",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        title: 'Как паттерн "Мгновенное удовлетворение" влияет на пользовательский опыт?',
        images: [
            {
                src: "images/patterntwo11.jpg",
                correct: true,
                message: "Да!",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/patterntwo12.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patterntwo13.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patterntwo14.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: 'В каком случае использование паттерна "Мгновенное удовлетворение" наиболее целесообразно?',
        images: [
            {
                src: "images/patterntwo21.jpg",
                correct: false,
                message: "Нет, хотя мгновенный отклик может быть полезен, перегруженный интерфейс может затруднить восприятие информации",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patterntwo22.jpg",
                correct: false,
                message: "Нет, в таких случаях пользователи могут сосредоточиться на шагах и требованиях задачи, а не на мгновенных откликах. Важно предоставить ясные и пошаговые инструкции, что может требовать более осознанного взаимодействия с интерфейсом, а не только мгновенной обратной связи",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patterntwo23.jpg",
                correct: true,
                message: "Да! В этом случае пользователи ожидают быстрых и мгновенных откликов на свои действия, такие как фильтрация товаров, добавление их в корзину или смену сортировки. Быстрая обратная связь помогает пользователям легко и быстро находить интересующие их товары, что улучшает их опыт покупок и делает процесс более приятным",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/patterntwo24.jpg",
                correct: false,
                message: "Нет, хотя мгновенное удовлетворение в виде проверки введенных данных может быть полезно, важнее обеспечить четкость и последовательность процесса",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title:  'В каких типах интерфейсов использование паттерна "Сканирование" наиболее эффективно?',
        images: [
            {
                src: "images/patternthree11.jpg",
                correct: false,
                message: "Нет, в таких приложениях пользователи, как правило, знают, что именно они ищут и каковы последовательности действий. Здесь, скорее всего, важно обеспечить доступ к функционалу и информации в рамках одной задачи, что не требует активного сканирования",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternthree12.jpg",
                correct: true,
                message: "Да! В таких интерфейсах пользователи часто просматривают множество товаров и категорий, и возможность быстро находить нужное, фильтровать результаты и визуально определять интересующие товары становится ключевой для удобства покупок",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/patternthree13.jpg",
                correct: false,
                message: "Нет, если интерфейс уже простой и минималистичный, пользователям не нужно сканировать информацию, чтобы находить то, что им нужно",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternthree14.jpg",
                correct: false,
                message: 'Нет, на страницах с большим объемом текста паттерн "Сканирование" не всегда эффективен, так как пользователи предпочитают глубокое чтение для понимания. Лучше использовать подзаголовки и выделения для облегчения восприятия',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: 'Как паттерн "Сканирование" помогает улучшить пользовательский опыт?',
        images: [
            {
                src: "images/patternthree21.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternthree22.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternthree23.jpg",
                correct: true,
                message: "Да!",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/patternthree24.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: 'Почему согласованность использования паттерна "Привыкание" между приложениями важна для пользователя?',
        images: [
            {
                src: "images/patternfour11.jpg",
                correct: true,
                message: "Да! Пользователи, видя знакомые элементы и взаимодействия, чувствуют себя более комфортно и уверенно, что улучшает их опыт",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/patternfour12.jpg",
                correct: false,
                message: "Нет, хотя согласованность может помочь в этом, главная цель — это создание предсказуемости, а не только обучение",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternfour13.jpg",
                correct: false,
                message: "Нет, это также может быть следствием согласованности, но не является её основной функцией",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternfour14.jpg",
                correct: false,
                message: "Нет, это неверное утверждение, так как последовательность и предсказуемость, наоборот, уменьшают вероятность ошибок",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: 'Почему согласованность использования паттерна "Привыкание" между приложениями важна для пользователя?',
        images: [
            {
                src: "images/patternfour21.jpg",
                correct: false,
                message: "Нет, это противоречит сути несогласованности",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternfour22.jpg",
                correct: true,
                message: 'Да! Несогласованное использование паттерна "Привыкание" может негативно повлиять на пользовательский опыт, так как оно создает путаницу и приводит к недоверию к интерфейсу',
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/patternfour23.jpg",
                correct: false,
                message: "Нет, это может быть следствием, но основное влияние связано с разочарованием",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternfour24.jpg",
                correct: false,
                message: "Нет, это также может произойти, но главное — именно эмоциональная реакция пользователей на несогласованность",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: 'Что представляет собой паттерн "Социальное доказательство"?',
        images: [
            {
                src: "images/patternfive11.jpg",
                correct: false,
                message: 'Нет, этот аспект связан с возможностью взаимодействия через социальные сети, но не является основным содержанием паттерна "Социальное доказательство". Паттерн больше касается влияния мнений и действий других людей',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternfive12.jpg",
                correct: false,
                message: 'Нет, хотя это может способствовать созданию позитивного имиджа, это не охватывает суть "Социального доказательства", которое фокусируется на мнениях и отзывах других, а не на достижениях конкретных пользователей',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternfive13.jpg",
                correct: false,
                message: 'Нет, хотя данная функция может быть частью общей стратегии вовлечения пользователей, она не отражает основную идею "Социального доказательства", касающуюся использования отзывов и рекомендаций для повышения доверия',
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternfive14.jpg",
                correct: true,
                message: "Да! Использование положительных отзывов, рекомендаций и рейтингов помогает вызвать доверие у пользователей и подтвердить качество продукта",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        title: 'В каких ситуациях применение паттерна "Социальное доказательство" будет наиболее эффективным?',
        images: [
            {
                src: "images/patternfive21.jpg",
                correct: false,
                message: "Нет, хотя социальное доказательство имеет значение, в бизнес-приложениях более важными могут быть функциональные характеристики и профессиональные рекомендации, чем массовое мнение пользователей",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternfive22.jpg",
                correct: false,
                message: "Нет, социальное доказательство может не быть критически важным, так как такие сайты часто ориентированы на предоставление информации, а не на продажу товаров или услуг",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternfive23.jpg",
                correct: true,
                message: "Да! Отзывы пользователей, рейтинги и рекомендации могут оказать значительное влияние на покупательские решения. Когда потенциальные клиенты видят положительные отзывы и высокие оценки, это может повысить доверие к продукту и способствовать его продаже",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/patternfive24.jpg",
                correct: false,
                message: "Нет, хотя отзывы могут иметь значение, главным фактором при проектировании игр часто являются геймплей и вовлеченность, а не социальное доказательство",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: 'Как паттерн "Якорения" может влиять на восприятие цен пользователями на веб-странице?', 
        images: [
            {
                src: "images/patternsix11.jpg",
                correct: false,
                message: "Нет, низкая цена обычно воспринимается как выгодное предложение, а не завышенная стоимость",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternsix12.jpg",
                correct: false,
                message: "Нет, начальная цена, которую видит пользователь, определяет дальнейшую оценку других цен",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternsix13.jpg",
                correct: false,
                message: "Нет",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternsix14.jpg",
                correct: true,
                message: 'Да! Если пользователи видят высокую начальную цену, она становится ориентиром, и следующие цены, даже если они ниже, могут восприниматься как более приемлемые или "нормальные" по сравнению с этим якорем',
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            }
        ]
    },
    {
        title: 'Размещение каких элементов на главной странице может служить "якорем" для последующих сравнений пользователей?',
        images: [
            {
                src: "images/patternsix21.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternsix22.jpg",
                correct: true,
                message: "Да!",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/patternsix23.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternsix24.jpg",
                correct: false,
                message: "Нет, это не все",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: 'Какая из визуальных подсказок НЕ помогает снизить когнитивную нагрузку на пользователей?',
        images: [
            {
                src: "images/patternseven11.jpg",
                correct: true,
                message: "Да! Крупные и сложные иллюстрации могут увеличить когнитивную нагрузку, так как они могут отвлекать пользователей, усложнять восприятие информации и создавать путаницу",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/patternseven12.jpg",
                correct: false,
                message: "Нет, она помогает пользователям быстро идентифицировать действия, которые они могут предпринять, тем самым снижая когнитивную нагрузку",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternseven13.jpg",
                correct: false,
                message: "Нет, эти элементы помогают пользователям лучше понимать, что нужно делать на странице, уменьшая необходимость в анализе и догадках",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternseven14.jpg",
                correct: false,
                message: "Нет, иконки могут упростить восприятие информации и быстро передать смысл, что также снижает когнитивную нагрузку",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: 'Какой из перечисленных аспектов оптимизации для мобильных устройств может снизить когнитивную нагрузку?',
        images: [
            {
                src: "images/patternseven21.jpg",
                correct: false,
                message: "Нет, это увеличивает когнитивную нагрузку, так как пользователям будет сложно точно нажимать на элементы, что может привести к ошибкам и фрустрации",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternseven22.jpg",
                correct: true,
                message: "Да! Когда элементы управления удобно расположены и имеют подходящий размер, пользователям легче взаимодействовать с интерфейсом, что снижает когнитивную нагрузку и делает использование приложения более интуитивным",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/patternseven23.jpg",
                correct: false,
                message: "Нет, это увеличивает когнитивную нагрузку, так как пользователю придется запоминать больше информации и выполнять больше действий для достижения своей цели",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternseven24.jpg",
                correct: false,
                message: "Нет, десктопные интерфейсы не всегда подходят для мобильных устройств. Сохранение того же интерфейса может усложнить навигацию и взаимодействие на мобильном устройстве, что также увеличит когнитивную нагрузку",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: 'Какой из примеров наилучшим образом демонстрирует применение паттерна "Проспективная память" в веб-дизайне?', 
        images: [
            {
                src: "images/patterneight11.jpg",
                correct: false,
                message: "Нет, это больше связано с удобством и тем, чтобы пользователи могли вернуться к предыдущим действиям, но не является прямым напоминанием о будущем действии",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patterneight12.jpg",
                correct: false,
                message: "Нет, хотя это может быть полезно для пользователей, оно не связано с напоминанием о каких-либо предстоящих действиях",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patterneight13.jpg",
                correct: true,
                message: "Да! Уведомление о предстоящих платежах помогает пользователю не забыть о важном событии (например, оплате услуг, подписки и т. д.) и служит напоминанием о необходимости совершить действие",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/patterneight14.jpg",
                correct: false,
                message: "Нет, это функциональная возможность, которая помогает пользователям искать товары, но не имеет отношения к напоминанию о будущем действии",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: 'Какая из приведенных ситуаций наилучшим образом демонстрирует правильное применение паттерна "Управление ожиданиями"?',
        images: [
            {
                src: "images/patterneight21.jpg",
                correct: true,
                message: "Да! Предоставляя подробную информацию о сроках и условиях доставки заказа, ты даешь пользователю четкое понимание, когда он может ожидать получения своего заказа, что помогает избежать разочарования и недовольства",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/patterneight22.jpg",
                correct: false,
                message: "Нет, это помогает пользователю понять, что происходит, но не управляет ожиданиями относительно того, как долго будет ждать загрузка или что именно происходит",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patterneight23.jpg",
                correct: false,
                message: "Нет, это улучшает пользовательский интерфейс, но не имеет прямого отношения к управлению ожиданиями пользователя в контексте какой-то специфической ситуации",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patterneight24.jpg",
                correct: false,
                message: "Нет, хотя это может повысить визуальную привлекательность и читаемость, не имеет отношения к управлению ожиданиями пользователя",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: 'Какой из перечисленных приемов относится к методам управления ожиданиями пользователей?',
        images: [
            {
                src: "images/patternnine11.jpg",
                correct: true,
                message: "Да! Этот метод дает пользователю четкое понимание условий и сроков доставки, тем самым уменьшая неопределенность и беспокойство относительно получения заказа",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/patternnine12.jpg",
                correct: false,
                message: "Нет, хотя это может быть полезно, это не всегда возможно или практично, и пользователи могут интерпретировать долгое время загрузки как проблему, что не всегда управляет их ожиданиями",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternnine13.jpg",
                correct: false,
                message: "Нет, это улучшает удобство использования, но не связано с управлением ожиданиями в контексте того, что пользователи могут ожидать от сервиса или продукта",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternnine14.jpg",
                correct: false,
                message: "Нет, это связано больше с дизайном и эстетикой, но не непосредственно с управлением ожиданиями пользователей по поводу конкретных услуг или функций",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: 'Что из перечисленного НЕ относится к принципам реализации паттерна "Настройка и персонализация"?',
        images: [
            {
                src: "images/patternnine21.jpg",
                correct: true,
                message: 'Да! Этот принцип относится к адаптивному дизайну и улучшению пользовательского опыта, но не является частью паттерна "Настройка и персонализация". "Настройка и персонализация" подразумевает возможность настройки интерфейса или функциональности в соответствии с предпочтениями пользователя',
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/patternnine22.jpg",
                correct: false,
                message: "Нет, это позволяет пользователям легко настраивать интерфейс или функциональность под свои нужды",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternnine23.jpg",
                correct: false,
                message: "Нет, это делает настройки более управляемыми и не перегружает пользователей лишней информацией, что облегчает процесс персонализации",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternnine24.jpg",
                correct: false,
                message: "Нет, это помогает пользователям избежать настройки каждый раз при входе в систему, что делает их опыт более персонализированным и удобным",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title:  'Какой из перечисленных принципов НЕ относится к паттерну "Настройка и персонализация"?',
        images: [
            {
                src: "images/patternten11.jpg",
                correct: false,
                message: "Нет, это дает пользователю контроль над визуальным стилем интерфейса и являются примером персонализации",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternten12.jpg",
                correct: true,
                message: 'Да! Адаптивный дизайн обеспечивает удобство использования сайта или приложения на разных устройствах, автоматически подстраиваясь под размеры экранов. Однако он не относится к паттерну "Настройка и персонализация", который фокусируется на настройке функций и внешнего вида интерфейса в соответствии с личными предпочтениями пользователя',
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/patternten13.jpg",
                correct: false,
                message: "Нет, это позволяет пользователю сохранять свои предпочтения и настройки, что также является частью персонализации",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternten14.jpg",
                correct: false,
                message: "Нет, это позволяет системе запоминать, что предпочитает пользователь, и таким образом облегчает использование приложения или сайта в будущем",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            }
        ]
    },
    {
        title: 'Какая из перечисленных функций лучше всего помогает пользователям не забывать о незавершенных задачах на веб-сайте?',
        images: [
            {
                src: "images/patternten21.jpg",
                correct: true,
                message: "Да! Эта функция напрямую помогает пользователям не забыть о незавершенных задачах, связанных с покупкой товаров. Напоминания служат эффективным способом вернуть внимание пользователя к его незавершенным действиям, что может способствовать завершению покупки",
                footerColor: "#4EFF84",
                icon: "images/icon.svg"
            },
            {
                src: "images/patternten22.jpg",
                correct: false,
                message: "Нет, эта функция позволяет управлять содержимым корзины, но не помогает напомнить о незавершенных задачах",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternten23.jpg",
                correct: false,
                message: "Нет, хотя это может быть полезно, это не связано непосредственно с напоминанием о незавершенных покупках",
                footerColor: "#FF4E51",
                icon: "images/icon1.svg"
            },
            {
                src: "images/patternten24.jpg",
                correct: false,
                message: "Нет, это может привлечь внимание пользователей, но не связано с конкретными незавершёнными задачами",
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
                    localStorage.setItem('test12CorrectAnswers', correctAnswers);
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
    
       
    localStorage.setItem('test12CorrectAnswers', correctAnswers);
    
        }
        
        loadQuestion();