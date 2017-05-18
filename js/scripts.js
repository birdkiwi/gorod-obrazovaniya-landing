$(document).ready(function () {
    $('.js-subscribe-form').on('submit', function () {
        var $form = $(this),
            url = $form.attr('action'),
            method = $form.attr('method'),
            data = $form.serialize();

        $.ajax({
                url: url,
                method: method,
                data: data
            })
            .done(function() {
                $('#overlay').addClass('active');
            })
            .fail(function() {
                alert( "Возникла ошибка при отправке данных. Пожалуйста, проверьте интернет-соединение, либо попробуйте позднее." );
            })
            .always(function() {
                //alert( "complete" );
            });

        return false;
    });
});

$('.js-modal-close').click(function () {
    $('#overlay').removeClass('active');
    return false;
});