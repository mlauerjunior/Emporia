var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: '../carousel/Evaluation-1.png',
        w: 1200,
        h: 900
    },
    {
        src: '../carousel/Evaluation-2.png',
        w: 1200,
        h: 900
    },
        {
        src: '../carousel/Evaluation-3.png',
        w: 1200,
        h: 900
    },
    {
        src: '../carousel/Evaluation-4.png',
        w: 1200,
        h: 900
    },
    {
        src: '../carousel/Evaluation-5.png',
        w: 1200,
        h: 900
    },

];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();
