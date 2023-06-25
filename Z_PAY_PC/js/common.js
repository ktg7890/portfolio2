$(document).ready(function () {   

    // // 텍스트 애니메이션
    // var target = $('.animated');
    // var target2 = $('.animated_2');
    // var target3 = $('.animated_3');
    // var target4 = $('.animated_4');
    // var target5 = $('.scale');
    // var target6 = $('.ani');

    // target.each(function (i, v) {
    //     $(this).waypoint(function () {
    //         $(v).addClass('on')
    //     }, {
    //         offset: '100%'
    //     })
    // })

    // target2.each(function (i, v) {
    //     $(this).waypoint(function () {
    //         $(v).addClass('on')
    //     }, {
    //         offset: '100%'
    //     })
    // })
    // target3.each(function (i, v) {
    //     $(this).waypoint(function () {
    //         $(v).addClass('on')
    //     }, {
    //         offset: '100%'
    //     })
    // })
    // target4.each(function (i, v) {
    //     $(this).waypoint(function () {
    //         $(v).addClass('on')
    //     }, {
    //         offset: '100%'
    //     })
    // })

    // target5.each(function (i, v) {
    //     $(this).waypoint(function () {
    //         $(v).addClass('on')
    //     }, {
    //         offset: '100%'
    //     })
    // })

    // target6.each(function (i, v) {
    //     $(this).waypoint(function () {
    //         $(v).addClass('on')
    //     }, {
    //         offset: '100%'
    //     })
    // })



});

//페이지 맨 위로 보내기
function goPageTop() {
    $("html, body").stop().animate({
        scrollTop: 0
    }, 1200);
}

