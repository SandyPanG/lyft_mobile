function init() {

};

/* Botón */


$('#dropdown').bind('change keyup', function() {

    if($(input).validate(min.length < 11).checkForm()) {

        $('#next').attr('disabled', false);

    } else {

        $('#next').attr('disabled', true);

    } });
