var pswpElement = document.querySelectorAll('.pswp')[0];


// build items array
var items = [
    {
        src: '../carousel/Evaluation-1.png',
        w: 1000,
        h: 800
    },
    {
        src: '../carousel/Evaluation-2.png',
        w: 1000,
        h: 800
    },
        {
        src: '../carousel/Evaluation-3.png',
        w: 1000,
        h: 800
    },
    {
        src: '../carousel/Evaluation-4.png',
        w: 1000,
        h: 800
    },
    {
        src: '../carousel/Evaluation-5.png',
        w: 1000,
        h: 800
    },

];
var template = document.getElementById("galleryPSWP"); // .pswp

// define options (if needed)
var options = {
    modal: false,
    closeOnScroll: false,
    index: 0,
    getThumbBoundsFn: function(index) {
            // var obj = document.getElementById("galleryPSWP");
            // var rect = obj.getBoundingClientRect();
            // console.log(rect);

        var rect = {x: 0,  y: 0 , w: 0}
        var templateBounds = template.parentElement.getBoundingClientRect();
        rect.x -= templateBounds.left;
        rect.y -= templateBounds.top;

        console.log(rect);
        return rect;
    }
};



// Initializes and opens PhotoSwipe
var photoSwipe = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options, template);
photoSwipe.listen('updateScrollOffset', function(_offset) {
    var r = template.getBoundingClientRect();
    _offset.x += r.left;
    _offset.y += r.top;
});
photoSwipe.init();
