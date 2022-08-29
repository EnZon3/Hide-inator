//on document ready
$(document).ready(function(){
    //on click of the submit button
    $('#hdSubmit').click(function(){
        //prevent default action
        event.preventDefault();
        var link = $('#website').val();
        
        if(link == ''){
            //show the error message
            $('#error').html('Please fill out all fields.');
            return;
        }
        
        link = window.location.href + '/api/proxy/' + link;
        console.log(link);

        document.getElementById("body1").innerHTML = '';

        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", link);
        ifrm.style.width = screenWidth + "px";
        ifrm.style.height = screenHeight + "px";
        document.body.appendChild(ifrm);
    });
});