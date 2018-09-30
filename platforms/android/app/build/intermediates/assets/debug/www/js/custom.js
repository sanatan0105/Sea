$(document).ready(function(){

    $("#include").load('include/header.html', function(){
        $('.sidenav').sidenav();
        $('.dropdown-trigger').dropdown({constrainWidth: false });
        $('select').formSelect();
        $('.tabs').tabs();
    });

    $('#feed_filter').hide();


    $(".switch").find("input[type=checkbox]").on("change",function() {
        var status = $(this).prop('checked');

        if(status == true){
            $('#feed_filter').show(200);
        } else {
            $('#feed_filter').hide(200);
        }

    });
});