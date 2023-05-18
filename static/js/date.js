$(document).ready(function(){
  setInterval(function() {
    var date = new Date();
    var dateOnly = date.toLocaleDateString("en-US", {timeZone: "Asia/Manila"});
    document.getElementById("date").innerHTML = dateOnly;
  }, 1000);
});