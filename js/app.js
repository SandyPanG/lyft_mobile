/*function init() {

};
*/
window.onload = timeout;

function timeout () {
    window.setTimeout("redirect()", 3000)
}

function redirect () {
  window.location = "index.html";
  return;
}
/* Botón */


$('#dropdown').bind('change keyup', function() {

    if($(input).validate(min.length < 11).checkForm()) {

        $('#next').attr('disabled', false);

    } else {

        $('#next').attr('disabled', true);

    } });
