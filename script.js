function searchFunction() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let items = document.querySelectorAll("");

    items.forEach(item => {
        let text = item.textContent.toLowerCase();
        item.classList.toggle("hide", !text.includes(input));
    });
}
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView:3,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
