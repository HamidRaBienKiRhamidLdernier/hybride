var timeStart = 0;
var timeStop = 0;
var duration = 0;

var url = "http://www.zastavki.com/pictures/originals/2013/Photoshop_Image_of_the_horse_053857_.jpg";

function onBodyLoad () {
    timeStart = new Date().getTime();
    document.addEventListener("deviceready", onDeviceReady, false);
}

function downloadFile(){
  window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
      var imagePath = "/sdcard/cheval.jpg"; // full file path
      var fileTransfer = new FileTransfer();
      fileTransfer.download(url, imagePath, function (entry) {
                console.log(entry.fullPath); // entry is fileEntry object
                showLink(imagePath);
      }, function (error) {
               console.log(error.code);
      });
   })
}

function showLink (path) {
    var imgEl = document.getElementById("img-dl");
    imgEl.setAttribute("src", path);

    timeStop = new Date().getTime();
    duration = timeStop - timeStart;
    var pEl = document.getElementById("time-dl");
    pEl.innerHTML = "Download time : " + duration;
}



function onFail (error) {
    console.error(error);
}

function onDeviceReady() {
    downloadFile();
}
