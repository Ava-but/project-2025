const burger = document.querySelector('.burger')
const ulHiddenClose = document.querySelector('.ul-hidden-close')
const ulHidden = document.querySelector('.ul-hidden')

burger.addEventListener('click',function(){
    ulHidden.classList.add('hidden-show')
})
ulHiddenClose.addEventListener('click',function(){
    ulHidden.classList.remove('hidden-show')
})



document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper", {
      slidesPerView: 3, 
      spaceBetween: 20, 
      loop: true, 
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 1,
        },
      },
    });
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        480: { slidesPerView: 1 },
      },
    });
  
    function searchFunction() {
      let input = document.getElementById("searchInput").value.toLowerCase();
      let slides = document.querySelectorAll(".swiper-slide");
  
      slides.forEach((slide) => {
        let name = slide.querySelector(".slider-name").textContent.toLowerCase();
        let street = slide.querySelector(".slider-street").textContent.toLowerCase();
  
        if (name.includes(input) || street.includes(input)) {
          slide.style.display = "block";
        } else {
          slide.style.display = "none";
        }
      });
  
      swiper.update(); 
    }
  
    document.getElementById("searchInput").addEventListener("keyup", searchFunction);
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");
    const loginButton = document.getElementById("loginButton");
    const signupButton = document.getElementById("signupButton");
    const userGreeting = document.getElementById("userGreeting");
  
    const loginEmail = document.getElementById("loginEmail");
    const loginPassword = document.getElementById("loginPassword");
    const confirmLogin = document.getElementById("confirmLogin");
  
    const signupName = document.getElementById("signupName");
    const signupEmail = document.getElementById("signupEmail");
    const signupPassword = document.getElementById("signupPassword");
    const confirmSignup = document.getElementById("confirmSignup");
  
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    function showModal(modal) {
      modal.classList.add("show");
      modal.classList.remove("hidden");
    }
  
    function hideModal(modal) {
      modal.classList.remove("show");
      setTimeout(() => modal.classList.add("hidden"), 500);
    }
  
    loginButton.addEventListener("click", function () {
      showModal(loginModal);
    });
  
    signupButton.addEventListener("click", function () {
      showModal(signupModal);
    });
  
    document.querySelectorAll(".close").forEach(closeBtn => {
      closeBtn.addEventListener("click", function () {
        hideModal(document.getElementById(closeBtn.dataset.modal));
      });
    });
  
    confirmSignup.addEventListener("click", function () {
      const name = signupName.value.trim();
      const email = signupEmail.value.trim();
      const password = signupPassword.value.trim();
  
      if (!isValidEmail(email)) {
        alert("Invalid email format");
        return;
      }
  
      if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
      }
  
      localStorage.setItem(email, JSON.stringify({ name, password }));
      alert("Registration successful!");
      hideModal(signupModal);
  
      loginButton.style.display = "none";
      signupButton.style.display = "none";
      userGreeting.textContent = `Welcome, ${name}!`;
      userGreeting.style.cssText = 'color: purple; font-size: 1.5rem; font-weight: bold; position: absolute; top: 0; right: 0; padding: 1rem;';
    });
  
    confirmLogin.addEventListener("click", function () {
      const email = loginEmail.value.trim();
      const password = loginPassword.value.trim();
  
      if (!isValidEmail(email)) {
        alert("Invalid email format");
        return;
      }
  
      const storedUser = localStorage.getItem(email);
      if (!storedUser) {
        alert("User not found.");
        return;
      }
  
      const userData = JSON.parse(storedUser);
      if (userData.password !== password) {
        alert("Incorrect password.");
        return;
      }
  
      alert("Login successful!");
      userGreeting.textContent = `Welcome, ${userData.name}!`;
      userGreeting.style.cssText = 'color: purple; font-size: 1.5rem; font-weight: bold; position: absolute; top: 0; right: 0; padding: 1rem;';

      hideModal(loginModal);
  
      
      loginButton.style.display = "none";
      signupButton.style.display = "none";
    });
  });
  

  

  