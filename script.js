const API_URL = "https://script.google.com/macros/s/AKfycbwYEntgFqWEK1VjBkuV7TDssVWanGVvj2HJiDaVgA-2e-sQ9ImDpO-RWgWlID0aXaA0/exec";


function tambahProduk() {


const file =
document.getElementById("gambar").files[0];


if(!file){

alert("Sila pilih gambar produk");
return;

}



document.getElementById("status").innerHTML =
"⏳ Upload gambar...";



const reader = new FileReader();



reader.onload = function(e){


uploadGambar(
e.target.result,
file.name
);


};



reader.readAsDataURL(file);



}



function uploadGambar(base64,name){



fetch(API_URL,{

method:"POST",

body:JSON.stringify({

action:"upload",

image:base64,

name:name

})


})

.then(res=>res.json())

.then(data=>{


simpanProduk(data.url);


});


}





function simpanProduk(gambarURL){



const produk={


Nama:
document.getElementById("nama").value,


Harga:
document.getElementById("harga").value,


Kategeri:
document.getElementById("kategori").value,


Gambar:
gambarURL,


Tiktok:
document.getElementById("tiktok").value,


Shopee:
document.getElementById("shopee").value,


Lazada:
document.getElementById("lazada").value,


Badge:
document.getElementById("badge").value



};



fetch(API_URL,{

method:"POST",

body:JSON.stringify({

action:"add",

product:produk

})


})

.then(res=>res.json())

.then(data=>{


document.getElementById("status").innerHTML =
"✅ Produk berjaya ditambah";


});


}
