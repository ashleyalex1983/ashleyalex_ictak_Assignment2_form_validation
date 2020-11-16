
//Fixed navbar change background color on scroll
$(window).on('scroll',function(){
    if($(window).scrollTop())
    {
        $('.mynav').addClass('black');
    }
    else
    {
        $('.mynav').removeClass('black');
    }
});

// Slide navbar to a section
$(document).ready(function(){
    $('.slide-section').click(function(e){
        var linkhref =$(this).attr('href');

        $('html,body').animate({
            scrollTop: $(linkhref).offset().top
        },1200);

        e.preventDefault();
    })
})