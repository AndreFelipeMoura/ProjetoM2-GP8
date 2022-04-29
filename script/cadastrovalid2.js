$(document).ready(function(){
    $('#form-cadastro').validate({
        rules: {
            nome:{
                // required: true,
                // minlength: 5,
                // maxlength: 15,
                nome: true
            },
            
            email:{
                // required:true,
                email: true
            },
            senha:{
                senha: true
                
            },
            repitaSenha:{
                required: true,
                equalTo: '#senha'

            }            
        }
    })
})