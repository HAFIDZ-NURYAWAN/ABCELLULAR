//const UP = document.querySelectorAll('.button-with-image');
//const MUNCUL = document.getElementById('muncul');
//const DOWN = document.getElementById('tombol-keluar-dari-kotak-id');
// const NUTUP = document.getElementById('nutup');

//const openPOPUP = () => {
//    MUNCUL.classList.add('visible');
//    MUNCUL.classList.remove('hidden');
//};

document.querySelectorAll(".button-with-image").forEach(function(button) {
    button.addEventListener("click", function() {
        var popup = document.getElementById("muncul");
        if (popup.classList.contains("hidden")) {
            popup.classList.remove("hidden");
            setTimeout(function() {
                popup.classList.add("show");
            }, 6);
        } else {
            popup.classList.remove("show");
            setTimeout(function() {
                popup.classList.add("hidden");
            }, 100);
        };
    });
});

document.querySelector(".tombol-keluar-dari-kotak").addEventListener("click", function() {
    var popup = document.getElementById("muncul");
    popup.classList.remove("show");
    setTimeout(function() {
        popup.classList.add("hidden");
    }, 100);
});

//const closePOPUP = () => {
//    MUNCUL.classList.remove('visible');
//    setTimeout(() => {
//        MUNCUL.classList.add('hidden');
//    }, 300);
//};



//UP.forEach(button => {
//    button.addEventListener('click', openPOPUP);
//});

//DOWN.addEventListener('click', closePOPUP);

document.getElementById("button-pesan").addEventListener("click", function() {
    var nomorWhatsApp = "+6281228714202";
    var pesan = "Halo 👋 saya ingin pesan !";
    var url = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(nomorWhatsApp) + "&text=" + encodeURIComponent(pesan);
    window.open(url, "_blank");
});
// UP.forEach(button => {
//    button.addEventListener('click', () => {
//        MUNCUL.style.display = 'block';
//    })
//})

// DOWN.addEventListener('click', () => {
//    NUTUP.classList.add('hidden');
//})