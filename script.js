var modelo=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Qyk1k1lCw/model.json",modelolisto);
Webcam.set({
   width:350,
   height:300,
   image_format:"png",
   png_quality:90
});
var camera=document.getElementById("camera");
Webcam.attach("#camera");
function foto(){
Webcam.snap(function(data_uri){
   document.getElementById("result").innerHTML="<img src='"+data_uri+"'id='picture'>";
});
}
function modelolisto(){
   console.log("todo bien 👍👍")
}
function voz(){
   var habla=window.speechSynthesis;
   var sonido="todo bien PC👍👍";
   var pronunciar=new SpeechSynthesisUtterance(sonido);
   habla.speak(pronunciar)
}
function reconocer(){
   var foto=document.getElementById("picture");
   modelo.classify(foto, analizar);
}
var emiji1="";
var emiji2="";
function analizar(error, resultados){
if(error){
   console.log(error);
}else{
   console.log(resultados);
   var p1=resultados[0].label;
   var p2=resultados[1].label;
   if(p1=="feliz"){
   emiji1="😁😁"
   }if(p1=="triste"){
      emiji1="🥲🥲"
      }if(p1=="asustado"){
         emiji1="😵😵"}
         if(p2=="feliz"){
            emiji2="😁😁"
            }if(p2=="triste"){
               emiji2="🥲🥲"
               }if(p2=="asustado"){
                  emiji2="😵😵"}
   document.getElementById("prediccion1").innerHTML=p1;
   document.getElementById("prediccion2").innerHTML=p2;
   document.getElementById("emoji1").innerHTML=emiji1;
   document.getElementById("emoji2").innerHTML=emiji2;
}

}