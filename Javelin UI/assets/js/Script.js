$(document).ready(function () {

    //Change Display of form collapse bottom to none
    if($(window).width() > 992) {
        $('.form-coll').addClass('d-none');
        $('#collapseForm').addClass('show');
    }

    $('#thumbnail').owlCarousel({
        loop:true,
        nav:true,
        items:1
    });

});