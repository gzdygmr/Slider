const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const imgContainer = document.querySelector(".img-container");
const imgs = document.querySelectorAll("img"); //tüm imgleri seç

let currentImg = 1; //foto ismi
let timeout;

prev.addEventListener("click", () => {   // prev. e tıklayınca
    currentImg --;  //azaltarak git!
    clearTimeout(timeout); //timeout sıfırla 

    updateImg();
})

next.addEventListener("click", () => {   // nexte tıklayınca
    currentImg ++;  //artırarak git!
    clearTimeout(timeout);
    updateImg();

})

function updateImg(){  //fonk tanımla
    if(currentImg > imgs.length){ //foto sayısından ileri giderse başa dön!!
        currentImg = 1;
    }else if( currentImg < 1){ //foto 1deyse en sona git
        currentImg = imgs.length;
    }

    imgContainer.style.transform = `translateX(-${(currentImg - 1) * 700}px)`;  //div in style transform ver -700 kaysın her tıklandıgında!
    timeout = setTimeout(()=>{  /// 4 sn sonra otomatik ilerlet
        currentImg ++;  // 1 arttır
        updateImg();  // fonk çağır

    }, 4000)


}

updateImg()