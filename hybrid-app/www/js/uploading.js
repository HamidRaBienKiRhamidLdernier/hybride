var timeStart = 0;
var timeStop = 0;
var duration = 0;

var url = "http://etunix.uqac.ca/abrun/transfert.php";

function onBodyLoad () {
    timeStart = new Date().getTime();
    document.addEventListener("deviceready", onDeviceReady, false);
}

function uploadFile(){

    var img = document.getElementById("img-to-upload");
    var imgURI = img.src;    

    var options = new FileUploadOptions();
    options.fileKey="fileToUpload";
    options.fileName= imgURI.substr(imgURI.lastIndexOf('/') + 1);
    options.mimeType="image/jpeg";

    var params = {};
    options.params = params;
    options.chunkedMode = false;

    var ft = new FileTransfer();
    ft.upload(imgURI, url, win, fail, options);   
}


function win(r) {
    /*Affichage du temps mis*/
    timeStop = new Date().getTime();
    duration = timeStop - timeStart;
    var pEl = document.getElementById("time-upl");
    pEl.innerHTML = "Download time : " + duration;

    /*Affichage de l'image uploadée*/
    var img = document.getElementById("img-to-upload");
    img.style.visibility = 'visible';

    //alert(r.response);
    var displayResponse = document.getElementById("response");
    displayResponse.innerHTML = r.response;
}

function fail(error) {
    alert("An error has occurred: Code = " + error.code);
    alert("upload error source " + error.source);
    alert("upload error target " + error.target);
    alert("upload error HTTP code " + error.http_status);
}


function onFail (error) {
    alert("An error has occurred: Code = " + error.code);
    console.error(error);
}

function onDeviceReady() {
    uploadFile();
}
