$(document).ready(function(){
    // init fullpage
    $('#fullpage').fullpage();

    $('#mini-quiz .card').click(function(){
        $('#answer_msg').removeClass('alert-success');
        $('#answer_msg').removeClass('alert-danger');
        if($(this).attr('id') == 'answer_3'){
            $('#answer_msg').addClass('alert-success');
            $('#answer_msg').text('Poprawna odpowiedź');
            $('#answer_msg').fadeIn();
        }
        else{
            $('#answer_msg').addClass('alert-danger');
            $('#answer_msg').text('Niepoprawna odpowiedź');
            $('#answer_msg').fadeIn();
        }
        $('#mini-quiz .card-cover').each(function(){
            $(this).show();
        });
    });
});