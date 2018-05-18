$(document).ready(function(e) {
    $("#news").unslider({
        speed: false, //  The speed to animate each slide (in milliseconds)
        delay: false, //  The delay between slide animations (in milliseconds)
        complete: function() {}, //  A function that gets called after every slide animation
        keys: true, //  Enable keyboard (left, right) arrow shortcuts
        dots: false, //  Display dot navigation
        fluid: true //  Support responsive design. May break non-responsive designs
    });
    var unslider = $('#news').unslider();

    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];

        //  Either do unslider.data('unslider').next() or .prev() depending on the className
        unslider.data('unslider')[fn]();
    });
});
