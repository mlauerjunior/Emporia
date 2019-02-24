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

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    modal: false,
    // closeOnScroll: false,
    index: 0
};


// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();
