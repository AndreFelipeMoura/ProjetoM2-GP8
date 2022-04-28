// $('#form-cadastro').submit(function(){
//     var nome = $('#nome');
//     var erro = $('.alert');
//     var campo = $('#campoErro');

//     erro.addClass('d-none');
//     $('.is-invalid').removeClass('is-invalid');
    
//     if (nome.val() == ''){
//       erro.removeClass('d-none');
//       campo.html('nome');
//       nome.focus();
//       nome.addClass('is-invalid');
      

//       return false;
//     }
//     // alert('clicou no eviar');
//     return false;
//   });
  
  $('#form-cadastro').submit(function(){
    let nome = $('#nome');
    let sobrenome = $('#sobrenome');
    let email = $('#email');
    let senha = $('#senha');
    let repitaSenha = $('#repitaSenha');
    let rg = $('#rg');
    let erro = $('.alert');
    let campo = $('#campo-erro');
    // let cep1 = $('#cep1');
    // let cep2 = $('cep2');
    

    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');
    
    if (nome.val() == ''){
      erro.removeClass('d-none');
      campo.html('nome');
      nome.focus();
      nome.addClass('is-invalid');
      
      return false;
    }


    if (sobrenome.val() == ''){
      erro.removeClass('d-none');
      campo.html('sobrenome');
      sobrenome.focus();
      sobrenome.addClass('is-invalid');
      
      return false;
    }


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


    if (repitaSenha.val() == ''){
      erro.removeClass('d-none');
      campo.html('Repita Senha');
      repitaSenha.focus();
      repitaSenha.addClass('is-invalid');
      
      return false;
    }


    if (rg.val() == ''){
      erro.removeClass('d-none');
      campo.html('RG');
      rg.focus();
      rg.addClass('is-invalid');
      
      return false;
    }


    // if (cep1.val() == ''){
    //   erro.removeClass('d-none');
    //   campo.html('CEP com 5 dígitos iniciais');
    //   cep1.focus();
    //   cep1.addClass('is-invalid');
      
    //   return false;
    // }

    // if (cep2.val() == ''){
    //   erro.removeClass('d-none');
    //   campo.html('CEP com 3 dígitos finais');
    //   cep2.focus();
    //   cep2.addClass('is-invalid');
      
    //   return false;
    // }

    // alert('clicou no eviar');
    return true;
  });