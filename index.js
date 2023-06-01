const navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.add("active");
}
document.querySelector("#close-navbar").onclick = () => {
    navbar.classList.remove("active");
}
// form toggle
const form = document.querySelector(".account-form");
document.querySelector("#account-btn").onclick = () => {
    form.classList.add("active");
}
document.querySelector("#close-form").onclick = () => {
    form.classList.remove("active");
}
// form
let registrbtn = document.querySelector(".account-form .registor-btn");
let login = document.querySelector(".account-form .login-btn");
registrbtn.onclick = () => {
    registrbtn.classList.add("active");
    login.classList.remove("active")
    document.querySelector(".account-form .login-form").classList.remove("active");
    document.querySelector(".account-form .registor-form").classList.add("active");
}


login.onclick = () => {
    login.classList.add("active");
    registrbtn.classList.remove("active")
    document.querySelector(".account-form .login-form").classList.add("active");
    document.querySelector(".account-form .registor-form").classList.remove("active");
}


var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
    //   dynamicBullets: true,
    },
loop:true,
grabCursor:true,
  });

  var swiper = new Swiper(".home-cources-slider", {
    // pagination: {
    //   el: ".swiper-pagination",
    // //   dynamicBullets: true,
    // },
loop:true,
grabCursor:true,
spaceBetween: 20,
breakpoints: {
    00: {
      slidesPerView: 1,
    },
768: {
      slidesPerView: 2,
    //   spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
    //   spaceBetween: 40,
    },
  
  },
  });


  
  var swiper = new Swiper(".teacher-slider", {
    // pagination: {
    //   el: ".swiper-pagination",
    // //   dynamicBullets: true,
    // },
loop:true,
grabCursor:true,
spaceBetween: 20,
breakpoints: {
    100: {
      slidesPerView: 1,
    },
800: {
      slidesPerView: 2,
    //   spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
    //   spaceBetween: 40,
    },
    1500: {
      slidesPerView: 4,
    //   spaceBetween: 50,
    },
  },
  });



  var swiper = new Swiper(".respect-slider", {
   
loop:true,
grabCursor:true,
spaceBetween: 30,
breakpoints: {
    0: {
      slidesPerView: 1,
    },
768: {
      slidesPerView: 2,
    //   spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
    //   spaceBetween: 40,
    },
  
  },
  });

  var swiper = new Swiper(".logo-container", {
   
    loop:true,
    grabCursor:true,
    spaceBetween: 30,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
    50: {
          slidesPerView: 2,
        //   spaceBetween: 20,
        },
        100: {
          slidesPerView: 3,
        //   spaceBetween: 40,
        },
        150: {
          slidesPerView: 4,
        //   spaceBetween: 40,
        },
        200: {
          slidesPerView: 5,
        //   spaceBetween: 40,
        },
        250: {
          slidesPerView: 6,
        //   spaceBetween: 40,
        },
      
      },
      });
 

// let para = document.querySelector(".accordion-content");
//   document.querySelector(".accordion-heading i").onclick = () => {
// para.classList.add("active");
//   }

let accordion = document.querySelectorAll(".accordion");
accordion.forEach(eco =>{
  eco.onclick = () => {
    accordion.forEach(dino =>dino.classList.remove("active"));
    eco.classList.toggle("active");
  }
});


document.querySelector(".load-more .btn").onclick = () => {
  document.querySelectorAll(".hide").forEach(show => {
    show.style.display="block";
  });
  document.querySelector(".load-more").style.display="none";
    } ;