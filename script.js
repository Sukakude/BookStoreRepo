searchForm = document.querySelector(".search-form");
let loginForm = document.querySelector(".login-form-container")

var swiper = new Swiper(".slideshow", {
    loop: true,
    centerSlides: true,
    autoplay:{
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints : {
        0 : {
            slidesPerView: 1,
        },
        768 : {
            slidesPerView: 2,
        },
        1024 : {
            slidesPerView: 3,
        },
    },
});

document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle("active")
}

document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");

}

document.querySelector("#close-login-btn").onclick = () =>{
    loginForm.classList.remove("active")
}


window.onscroll = () => {
    searchForm.classList.remove("active");

    if(window.scrollY > 80){
        document.querySelector('.header .header-1').classList.add('active');
    }
    else{
        document.querySelector('.header .header-1').classList.remove('active');
    }
}

window.onload = () => {
    if(window.scrollY > 80){
        document.querySelector('.header .header-1').classList.add('active');
    }
    else{
        document.querySelector('.header .header-1').classList.remove('active');
    }
}

