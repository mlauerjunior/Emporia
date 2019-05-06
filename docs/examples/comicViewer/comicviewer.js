(function() { 
    G.init();
    Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
    Galleria.configure({
        transition: 'fade',
        imageCrop: true,
        lightbox: true,
    });
    Galleria.ready(function() {
        var gallery = this; // galleria is ready and the gallery is assigned
          $('#fullscreen').click(function() {
            gallery.toggleFullscreen(); // toggles the fullscreen
          });
    });
    Galleria.run('.galleria');
}());


