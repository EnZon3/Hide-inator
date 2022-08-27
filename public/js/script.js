//on document ready
$(document).ready(function(){
    //on click of the submit button
    $('#hdSubmit').click(function(){
        //prevent default action
        event.preventDefault();
        //get the value of the input field
        var fileUp = $('#fileUp').val();
        var title = $('#pageTitle').val();
        var link = $('#website').val();

        console.log(fileUp, title, link);
        //if the input field is empty
        if(fileUp == '' || title == '' || link == ''){
            //show the error message
            $('#error').html('Please fill out all fields.');
            return;
        }

        //change favicon to the fileUp link
        $("#favicon").attr("href", fileUp);
        //change title to title var
        document.title = title;
        
    });
});