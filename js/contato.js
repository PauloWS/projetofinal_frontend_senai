$(function () {
    $('#contatos').on('submit', function () {
        var erro = 0;
        if ($('#nome').val().length <= 7) {
            $('#nomeErro').html('<span style="color:red;">O nome tem que conter pelo menos 7 caracteres</span>');
            erro++;
        } else {
            $('#nomeErro').html('');
        }

        if ($('#email').val().search("@") == -1) {
            $('#emailErro').html('<span style="color:red;">Digite um email válido</span>');
            erro++;
        } else {
            $('#emailErro').html('');
        }

        if ($('#assunto').val().length <= 7) {
            $('#assuntoErro').html('<span style="color:red;">O assunto tem que conter pelo menos 7 caracteres</span>');
            erro++;
        } else {
            $('#assuntoErro').html('');
        }

        if (erro > 0) {
            return false;
        } else {
            event.preventDefault();
            let nome = $('#nome').val();
            let email = $('#email').val();
            let assunto = $('#assunto').val();
            let comentario = $('#msg').val();

            let contato = {
                nome: nome,
                email: email,
                assunto: assunto,
                comentario: comentario
            }
            var tbContatos;
            if (localStorage.getItem('tbContatos')) {
                tbContatos = JSON.parse(localStorage.getItem('tbContatos'));
            } else {
                tbContatos = [];
            }
            tbContatos.push(contato);
            localStorage.setItem('tbContatos', JSON.stringify(tbContatos));
            alert('Contato enviado com sucesso!');
        }
    });

});