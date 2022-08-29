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

        //if the enable proxy checkbox is checked then change the link to the proxy url
        if($('#enableProxy').is(':checked')){
            link = window.location.href + 'proxy/api/proxy/' + link;
            console.log(link);
        }

        //change favicon to the fileUp link
        $("#favicon").attr("href", fileUp);
        //change title to title var
        document.title = title;
        //remove the whole body and create an iframe that goes to the link in the Link variable
        //remove everything in the body
        document.getElementById("body1").innerHTML = '';
        //get screen dimensions
        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", link);
        ifrm.style.width = screenWidth + "px";
        ifrm.style.height = screenHeight + "px";
        $('body').append(ifrm);
    });
});