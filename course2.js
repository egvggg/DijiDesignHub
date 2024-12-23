function throwConfetti() {
    let count = 300; // Количество конфетти
    let defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, { particleCount: Math.floor(count * particleRatio) }));
    }

    fire(0.25, { spread: 36, startVelocity: 55 });
    fire(0.20, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 1.2 });
    fire(0.10, { spread: 120, startVelocity: 25, decay: 0.9 });
    fire(0.15, { spread: 180, startVelocity: 40 });
}

document.addEventListener('DOMContentLoaded', () => {
    const updateLessonStars = (totalQuestions, starElementId, storageKey) => {
        const correctAnswers = parseInt(localStorage.getItem(storageKey)) || 0; // Получаем количество правильных ответов
        const lessonStars = document.getElementById(starElementId);
        const lessonActive = localStorage.getItem('lessonActive') === 'true'; // Получаем состояние занятия

        // Меняем изображение звезд в зависимости от правильных ответов
        if (correctAnswers >= totalQuestions) {
            lessonStars.src = "images/stars_3.png"; // 3 звезды
        } else if (correctAnswers >= totalQuestions - 1) {
            lessonStars.src = "images/stars_2.png"; // 2 звезды
        } else if (correctAnswers > 0) {
            lessonStars.src = "images/stars_1.png"; // 1 звезда
        } else {
            lessonStars.src = "images/stars_0.png"; // 0 звезд
        }

        // Запускаем конфетти только если занятие активно
        if (lessonActive) {
            throwConfetti(); // Эта функция запускает эффект конфетти
            localStorage.removeItem('lessonActive'); // Удаляем статус активности занятия
        } 
    };
    
    // Обновляем звезды для первого и второго занятия
    updateLessonStars(9, 'lesson-stars', 'test6CorrectAnswers');   // Обновляем звезды для первого занятия
    updateLessonStars(8, 'lesson-stars1', 'test7CorrectAnswers');
    updateLessonStars(11, 'lesson-stars2', 'test8CorrectAnswers');
    updateLessonStars(15, 'lesson-stars3', 'test9CorrectAnswers');
    updateLessonStars(15, 'lesson-stars5', 'test10CorrectAnswers');
    updateLessonStars(8, 'lesson-stars6', 'test11CorrectAnswers');
    updateLessonStars(20, 'lesson-stars7', 'test12CorrectAnswers');
    updateLessonStars(10, 'lesson-stars8', 'test13CorrectAnswers');
    updateLessonStars(10, 'lesson-stars9', 'test14CorrectAnswers');
    updateLessonStars(10, 'lesson-stars10', 'test15CorrectAnswers');
    updateLessonStars(10, 'lesson-stars11', 'test16CorrectAnswers');
    updateLessonStars(10, 'lesson-stars12', 'test17CorrectAnswers');
    updateLessonStars(8, 'lesson-stars13', 'test18CorrectAnswers');
    updateLessonStars(9, 'lesson-stars14', 'test19CorrectAnswers');
    updateLessonStars(10, 'lesson-stars15', 'test20CorrectAnswers');
});
