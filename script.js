


// Hamburger Menu expandable click function

$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
        $(".navbar-menu").css({
        "box-shadow": "0px 4px 4px rgba(0, 0, 0, 0.45)",
        "background-color": "transparent"});
    });

});

    //  Default Google Maps API call
    function initMap() {
        var vista = { lat: 33.165017, lng: -117.246241 };
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 17,
            center: vista,
        });
        var marker = new google.maps.Marker({ position: vista, map: map });
    }
    
    // Function for opening Maps in each Tab
    function openVista(){
        $('#va_toggle').toggleClass('is-active');
        var vista = { lat: 33.165017, lng: -117.246241 };
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 17,
            center: vista,
        });
        var marker = new google.maps.Marker({ position: vista, map: map });
    
    }
    
    function openCarlsbad(){
        $('#cb_toggle').toggleClass('is-active');
        var carlsbad = { lat: 33.154593, lng: -117.350977 };
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: carlsbad,
        });
        var marker = new google.maps.Marker({ position: carlsbad, map: map });
    
    }
    
    
    function imgModal1(){
        $('.modal').toggleClass('is-active')
        $('.modal-content').prepend('<img src="./images1/organic.jpg">')
    }
    function imgModal2(){
        $('.modal').toggleClass('is-active')
        $('.modal-content').prepend('<img src="./images1/coffee_beans.jpg">')
    }
    function imgModal3(){
        $('.modal').toggleClass('is-active')
        $('.modal-content').prepend('<img src="./images1/community.jpg">')
    }
    function imgModal4(){
        $('.modal').toggleClass('is-active')
        $('.modal-content').prepend('<img src="./images1/barista.jpg">')
    }
    function imgModal5(){
        $('.modal').toggleClass('is-active')
        $('.modal-content').prepend('<img src="./images1/beans_.jpg">')
    }
    function imgModal6(){
        $('.modal').toggleClass('is-active')
        $('.modal-content').prepend('<img src="./images1/milk_.jpg">')
    }
    function imgModal7(){
        $('.modal').toggleClass('is-active')
        $('.modal-content').prepend('<img src="./images1/tea_.jpg">')
    }
    function imgModal8(){
        $('.modal').toggleClass('is-active')
        $('.modal-content').prepend('<img src="./images1/watercoffee.jpg">')
    }
    function closeModal(){
            $('.modal').removeClass('is-active');
            $(".modal-content img:last-child").remove()
    }
