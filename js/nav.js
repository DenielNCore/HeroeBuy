$(".toggleNav").click(() => {
    let $ul = $('nav > ul');
    let $nav = $(`.toggleNav`);
    if($nav.offset().left===40) {
        $ul.slideDown(500);
        $nav.css({left: '2px'});
        $nav.addClass("toggleNav2");
    }
    if($nav.offset().left===2) {
        $ul.slideUp(500);
        $nav.css({left: '40px'});
        $nav.removeClass("toggleNav2");
    }
});
window.onscroll = () => {
    let y = window.pageYOffset;
    if(y>=200) {
        $(`nav`).addClass("scroll");
        $(`.toggleNav`).addClass("scroll2");
        $('.scrollWheel').css({display: 'flex'})
    }
    if(y<200) {
        $(`nav`).removeClass("scroll");
        $(`.toggleNav`).removeClass("scroll2");
        $('.scrollWheel').css({display: 'none'})
    }
};
$(".scrollWheel").click(() => window.scrollTo(0,0));