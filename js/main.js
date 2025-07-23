document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.timeline-slider');
    const items = document.querySelectorAll('.timeline-item');
    const nextBtn = document.querySelector('.slick-next');
    const prevBtn = document.querySelector('.slick-prev');

    let currentIndex = 0;

    function updateSlider() {
        const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
        const offset = -(itemWidth * currentIndex);
        slider.style.transform = `translateX(${offset}px)`;

        // Обновляем классы .slick-current
        items.forEach(item => item.classList.remove('slick-current'));
        if (items[currentIndex]) {
            items[currentIndex].classList.add('slick-current');
        }

        // Управление состоянием кнопок
        prevBtn.classList.toggle('slick-disabled', currentIndex === 0);
        nextBtn.classList.toggle('slick-disabled', currentIndex === items.length - 1);
    }

    nextBtn.addEventListener('click', function () {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    // Инициализация
    updateSlider();
});