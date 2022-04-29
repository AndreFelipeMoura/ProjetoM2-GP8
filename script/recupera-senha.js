$('#form-recupera').submit(function () {
    let email2 = $('#email2');
    let erro = $('.alert');
    let campo = $('#campo-erro');

    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');

    if (email2.val() == '') {
        erro.removeClass('d-none');
        campo.html('email');
        email2.focus();
        email2.addClass('is-invalid');

        return false;
    }

    return true;
});

$(document).ready(function(){
    $('#form-recupera').validate({
    })
})