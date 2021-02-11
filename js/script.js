$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.slider').slider({

        indicators: false
    });

    $('.modal').modal();
});

$(document).ready(function () {
    $('select').formSelect();
});

$('.smallCarousel').carousel({
    numVisible: 3,
    shift: 55,
    padding: 20,
});
$('.bigCarousel').carousel({
    numVisible: 7,
    shift: 55,
    padding: 10,
});

function toggleModal(){
    
    var instance = M.Modal.getInstance($('#modal3'));
    document.getElementById('info-modal-heading').value = "gjjgajdgjad";
    instance.open();
}