const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

    
function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slides[index].classList.add('active');
}


function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}


function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

showSlide(currentSlide);

function showSubMenu() {
    var submenu = document.querySelector(".submenu");
    submenu.style.display = "block";
    submenu.style.animation = "fade-in 0.3s ease-in";
  }
  
  function hideSubMenu() {
    var submenu = document.querySelector(".submenu");
    submenu.style.display = "none";
  }
  
  const submenuParent = document.querySelector(".submenu-parent");
  
  submenuParent.addEventListener("mouseover", showSubMenu);
  submenuParent.addEventListener("mouseout", hideSubMenu);

  const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário por padrão
  const email = emailInput.value;
  
  // Faça algo com o valor do email, como enviar para um servidor ou exibir uma mensagem de sucesso
  console.log('Email:', email);
  
  // Limpe o campo de email após o envio
  emailInput.value = '';
});