$('.timeline-slider').slick({
    arrows: true,
    prevArrow: $('.timeline-controls .slick-prev'),
    nextArrow: $('.timeline-controls .slick-next'),
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    swipeToSlide: true,
    cennterPadding: '0px',
    variableWidth: true,
    asNavFor: '.timeline-images',
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                variableWidth: false,
            }
        },
    ]

});

const $slider = $('.timeline-slider');
const slideCount = $slider.slick('getSlick').slideCount;
for (let i = 0; i < slideCount; i++) {
    $('.slick-dots').append(`<li data-slide="${i}">${i + 1}</li>`);
}
$('.slick-dots').on('click', 'li', function () {
    const index = $(this).data('slide');
    $slider.slick('slickGoTo', index);
});
$slider.on('afterChange', function (event, slick, currentSlide) {
    $('.slick-dots li').removeClass('slick-active');
    $('.slick-dots li').eq(currentSlide).addClass('slick-active');
});


$('.slick-dots li').eq(0).addClass('active');
$('.timeline-images').slick({
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    swipeToSlide: true,
    cennterPadding: '0px',
    asNavFor: '.timeline-slider'

});
