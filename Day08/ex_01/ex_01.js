document.addEventListener( 'DOMContentLoaded', function () {
new Splide( '#latest-creations-carousel', {
    perPage: 3,
    type: 'loop',
    autoplay: true,
    interval: 5000, 
    focus: 'center',
    padding: { left: '5rem', right: '5rem' },
} ).mount();
} );
