$(function () {
    $.ajax({
        url: "./json/pagina3.json",
        success: function (resposta) {
            $.each(resposta, function (index, itemData) {
                $("#homeCD").append('');
                $("#homeCD").append('<div class="col-md-4"><div id="cds" class="card mb-4 shadow-sm"><img src="' + itemData.urlimg + '">' + itemData.nome + '<br><br><div style="text-align:center;">' + itemData.preco + '</div></div>');
            })
        },
        //error: caso ocorra um erro retorna a mensagem da função
        error: function () {
            alert('Ocorreu um erro ao carregar a página');
        }
    });
});