const Eris = require("eris");
var x5bzteam = new Eris("MzU1MTI2NDk2MTY5NDI2OTQ1.Ds4fwg.OLOUmMuXSV3pK3Ae1MGYW2bcS6c");
x5bzteam.on("ready", () => {
    console.log("Yo! Changer [ON]");
    onstart();
});
x5bz = "398453811674480641";
nick = "Ayman ALmonster";
function onstart(){
    var v1 = nick.split('');
    var counter;
    var i=0;
var x5bz2 = ' ';
  var x5bz3 =   setInterval(function(){
     
     if (i == v1.length){
     clearInterval(x5bz3);
     onstart()
      return;
     }
     var v2 = v1[i];
    x5bz2 += v2;
    x5bzteam.editNickname(x5bz, x5bz2);
 
        i++;
   
     }, 1000);
}
x5bzteam.connect();
