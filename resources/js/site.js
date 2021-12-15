import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import persist from '@alpinejs/persist'
import trap from '@alpinejs/trap'
import 'focus-visible'

var Jquery = require('jquery');
var Slick = require("slick-carousel/slick/slick");


$(document).ready(function(){
    $('.img-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1
    });
});




// Global get CSRF token function (used by forms).
window.getToken = async () => {
    return await fetch('/!/DynamicToken/refresh')
        .then((res) => res.json())
        .then((data) => {
            return data.csrf_token
        })
        .catch(function (error) {
            this.error = 'Something went wrong. Please try again later.'
        })
}
// Call Alpine.
window.Alpine = Alpine
Alpine.plugin(collapse)
Alpine.plugin(persist)
Alpine.plugin(trap)
Alpine.start()


