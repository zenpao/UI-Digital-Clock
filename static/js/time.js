$(document).ready(function(){
  setInterval(function() {
    var date = new Date();
    var time = date.toLocaleTimeString("en-US", {timeZone: "Asia/Manila"});
    document.getElementById("time").innerHTML = time;
  }, 1000);
});