$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botaoCancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        console.log('submit')
        e.preventDefault();
        
        const enderecoImagemNova = $('#enderecoImagemNova').val();
        const novoItem = $('<li style="display:none;"></li>');
        
        $(`<img src="${enderecoImagemNova}" />`).appendTo(novoItem);
        
        $(`<div class="overlayImagemLink" >
                <a href="${enderecoImagemNova}" target="_blank" title="Ver imagem em tamanho real" " >
                    Ver imagem em tamanho real
                </a>
            </div>`).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(2000);
        $('#enderecoImagemNova').val('')

    })
})