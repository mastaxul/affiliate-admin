const API_URL = "https://script.google.com/macros/s/AKfycbwYEntgFqWEK1VjBkuV7TDssVWanGVvj2HJiDaVgA-2e-sQ9ImDpO-RWgWlID0aXaA0/exec";


function tambahProduk(){

const file = document.getElementById("gambar").files[0];


if(!file){
alert("Pilih gambar dahulu");
return;
}


document.getElementById("status").innerHTML =
"⏳ Upload gambar...";


const reader = new FileReader();


reader.onload = function(e){


fetch(API_URL,{

method:"POST",

body:JSON.stringify({

action:"upload",

image:e.target.result,

name:file.name

})

})

.then(response=>response.text())

.then(text=>{


console.log(text);


let data = JSON.parse(text);


if(data.url){

simpanProduk(data.url);

}else{

throw new Error(data.message);

}


})

.catch(error=>{


document.getElementById("status").innerHTML =
"❌ Error: " + error.message;


});


};


reader.readAsDataURL(file);


}




function simpanProduk(gambar){


const produk={


Nama:document.getElementById("nama").value,

Harga:document.getElementById("harga").value,

Kategeri:document.getElementById("kategori").value,

Gambar:gambar,

Tiktok:document.getElementById("tiktok").value,

Shopee:document.getElementById("shopee").value,

Lazada:document.getElementById("lazada").value,

Badge:document.getElementById("badge").value


};



document.getElementById("status").innerHTML =
"⏳ Simpan produk...";



fetch(API_URL,{

method:"POST",

body:JSON.stringify({

action:"add",

product:produk

})

})


.then(response=>response.text())


.then(text=>{


console.log(text);


document.getElementById("status").innerHTML =
"✅ Produk berjaya ditambah";


})


.catch(error=>{


document.getElementById("status").innerHTML =
"❌ Error: "+error.message;


});


}
