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
        var link2 = $('#website2').val();

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
        //remove the whole body and create an iframe that goes to the link in the Link variable
        //remove everything in the body
        document.getElementById("body1").innerHTML = '';
        //get screen dimensions
        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", link);
        ifrm.setAttribute("id", 'if1');
        ifrm.style.width = screenWidth + "px";
        ifrm.style.height = screenHeight + "px";
        document.body.appendChild(ifrm);
        var ifrm2 = document.createElement("iframe");
        ifrm2.setAttribute("src", link2);
        ifrm2.setAttribute("id", 'if2');
        ifrm2.style.width = screenWidth + "px";
        ifrm2.style.height = screenHeight + "px";
        document.body.appendChild(ifrm2);
    });
});

let siteNum = 1;

function switchSite() {
	if(siteNum == 1) {
  	$("#if1").css({'visibility':'visible'});
    $("#if2").css({'visibility':'hidden'});
    siteNum = 2;
    return;
  }
  if(siteNum == 2) {
  	$("#if2").css({'visibility':'visible'});
    $("#if1").css({'visibility':'hidden'});
    siteNum = 1;
    return;
  }
}

function KeyPress(e) {
	var evtobj = window.event? event : e
	if (evtobj.keyCode == 192 && evtobj.ctrlKey) {
  	switchSite();
  }
}

document.onkeydown = KeyPress;