$('#form-login').submit(function(){
    let email = $('#email');
    let senha = $('#senha');
    let erro = $('.alert');
    let campo = $('#campo-erro');

    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');
    
    if (email.val() == ''){
        erro.removeClass('d-none');
        campo.html('email');
        email.focus();
        email.addClass('is-invalid');
        
        return false;
      }

      
      if (senha.val() == ''){
        erro.removeClass('d-none');
        campo.html('senha');
        senha.focus();
        senha.addClass('is-invalid');
        
        return false;
      }

      return true;
  });