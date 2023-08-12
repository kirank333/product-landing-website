$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
   

    $(window).on('scroll load',function(){
        $(this).toggleClass('fa-times');
        $('.navbar').togglClass('nav-toggle');
    });
    $(window).on('scroll load',function(){
        $(this).removeClass('fa-times');
        $('.navbar').removelClass('nav-toggle');
        $('section').each(function(){
            let top=($window).scrollTop();
            let height=$(this).height();
            let offset=$(this).offset().top - 200;
            let id=$(this).attr('id');
            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('navbar').find('[href="#${id}"]').addClass('active');


            }

        });
    });
    $('.accordion-heading').click(function(){

        $('.accordion .accordion-content').slideUp();
        $(this).next('.accordion-content').slideDown();

    });
}); 