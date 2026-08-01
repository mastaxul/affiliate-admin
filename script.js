const API_URL = "https://script.google.com/macros/s/AKfycbwYEntgFqWEK1VjBkuV7TDssVWanGVvj2HJiDaVgA-2e-sQ9ImDpO-RWgWlID0aXaA0/exec";


function tambahProduk(){

const file = document.getElementById("gambar").files[0];


if(!file){
alert("Sila pilih gambar");
return;
}


document.getElementById("status").innerHTML =
"⏳ Upload gambar...";


const reader = new FileReader();


reader.onload = function(e){


fetch(API_URL,{
method:"POST",
mode:"no-cors",
body:JSON.stringify({

action:"upload",

image:e.target.result,

name:file.name

})

})
.then(()=>{

document.getElementById("status").innerHTML =
"✅ Gambar dihantar. Semak Google Drive";

})
.catch(error=>{

document.getElementById("status").innerHTML =
"❌ Error: "+error.message;

});


};


reader.readAsDataURL(file);


}
