$(document).ready(function () {   
    // 이미지
    const useLazyLoading = () => {
        const imgs = document.querySelectorAll('.lazy');

        const observerCallback = (entries, observer) => {
            entries.forEach(({
                isIntersecting,
                intersectionRatio,
                target
            }) => {
                if (isIntersecting && intersectionRatio > 0) {
                    target.src = target.dataset.src;
                    target.classList.remove("lazy");
                    observer.unobserve(target);
                }
            });
        };

        const io = new IntersectionObserver(observerCallback);
        imgs.forEach((img) => io.observe(img));
    };
    useLazyLoading();
    // END 이미지  

    // pop 닫기
    $('.pop_close_btn').on('click', function () {
        pop_Close(this);
    });
    $('.modal_close_btn').on('click', function () {
        modal_Close(this);
    });

});

// load
function load_Open() {
    $('#load').show();
    $('html, body').addClass('on');
}

function load_Cloase() {
    $('#load').hide();
    $('html, body').removeClass('on');
}
// END load


//공통 팝업 닫기
function pop_Close(target) {
    var pop = $(target).closest(".pop");
    var modal_bg = $(target).closest(".pop").prev(".modal");
    pop.fadeOut();
    modal_bg.fadeOut();
    $('html, body').removeClass('on');
}

function modal_Close(target) {
    var pop = $(target).closest(".modal");
    var modal_bg = $(target).closest(".modal").prev(".modal_bg");
    pop.slideUp();
    modal_bg.fadeOut();
    $('html, body').removeClass('on');
}
// END common_pop