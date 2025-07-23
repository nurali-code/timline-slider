document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.timeline-slider');
    const items = document.querySelectorAll('.timeline-item');
    const nextBtns = document.querySelectorAll('.slick-next');
    const prevBtns = document.querySelectorAll('.slick-prev');
    const dotsContainer = document.querySelector('.slick-dots');

    const imagesContainer = document.querySelector('.timeline-images');
    const images = document.querySelectorAll('.timeline-img');

    let currentIndex = 0;

    // Создание точек
    items.forEach((_, index) => {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide', index);
        if (index === 0) dot.classList.add('slick-active');
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('li');

    function updateSlider() {
        const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
        const imgWidth = images[0].offsetWidth + parseInt(getComputedStyle(images[0]).marginRight);

        // Смещение текста
        slider.style.transform = `translateX(${-itemWidth * currentIndex}px)`;

        // Смещение изображений
        imagesContainer.style.transform = `translateX(${-imgWidth * currentIndex}px)`;

        // Обновление классов
        items.forEach(item => item.classList.remove('slick-current'));
        if (items[currentIndex]) {
            items[currentIndex].classList.add('slick-current');
        }

        dots.forEach(dot => dot.classList.remove('slick-active'));
        if (dots[currentIndex]) {
            dots[currentIndex].classList.add('slick-active');
        }

        nextBtns.forEach(btn => btn.classList.toggle('slick-disabled', currentIndex === items.length - 1));
        prevBtns.forEach(btn => btn.classList.toggle('slick-disabled', currentIndex === 0));
    }

    // Обработчики кнопок
    nextBtns.forEach(btn =>
        btn.addEventListener('click', function () {
            if (currentIndex < items.length - 1) {
                currentIndex++;
                updateSlider();
            }
        })
    );

    prevBtns.forEach(btn =>
        btn.addEventListener('click', function () {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        })
    );

    // Обработчики точек
    dotsContainer.addEventListener('click', function (e) {
        if (e.target.tagName.toLowerCase() === 'li') {
            const index = parseInt(e.target.getAttribute('data-slide'));
            if (!isNaN(index)) {
                currentIndex = index;
                updateSlider();
            }
        }
    });

    updateSlider(); // Начальная инициализация
    // Перерасчёт при изменении размера экрана
    let resizeTimeout;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateSlider, 200);
    });
});

