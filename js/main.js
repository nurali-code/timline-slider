document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.timeline-slider');
    const items = document.querySelectorAll('.timeline-item');
    const nextBtn = document.querySelectorAll('.slick-next');
    const prevBtn = document.querySelector('.slick-prev');
    const dotsContainer = document.querySelector('.slick-dots');

    // Новое:
    const imagesContainer = document.querySelector('.timeline-images');
    const images = document.querySelectorAll('.timeline-img');

    let currentIndex = 0;

    // Создание точек
    items.forEach((_, index) => {
        const dot = document.createElement('li');
        if (index === 0) dot.classList.add('slick-active');
        dot.setAttribute('data-slide', index);
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('li');

    function updateSlider() {
        // === ТЕКСТ ===
        const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
        const offsetText = -(itemWidth * currentIndex);
        slider.style.transform = `translateX(${offsetText}px)`;

        items.forEach(item => item.classList.remove('slick-current'));
        if (items[currentIndex]) {
            items[currentIndex].classList.add('slick-current');
        }

        prevBtn.classList.toggle('slick-disabled', currentIndex === 0);
        // nextBtn.classList.toggle('slick-disabled', currentIndex === items.length - 1);
        nextBtn.forEach(item => item.classList.toggle('slick-disabled', currentIndex === items.length - 1));
        

        dots.forEach(dot => dot.classList.remove('slick-active'));
        if (dots[currentIndex]) {
            dots[currentIndex].classList.add('slick-active');
        }

        // === КАРТИНКИ ===
        const imgWidth = images[0].offsetWidth + parseInt(getComputedStyle(images[0]).marginRight);
        const offsetImg = -(imgWidth * currentIndex);
        imagesContainer.style.transform = `translateX(${offsetImg}px)`;
    }

   nextBtn.forEach(item => item.addEventListener('click', function () {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateSlider();
        }
    }));

    prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-slide'));
            if (!isNaN(index)) {
                currentIndex = index;
                updateSlider();
            }
        });
    });

    // Инициализация
    updateSlider();
});