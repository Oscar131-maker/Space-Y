/* Navegation Menu */
const menu = document.querySelector('.menu');
const linkContainer = document.querySelector('.list-container');
const main = document.querySelector('#main');
const sticky = menu.offsetTop;
const btnMenu = document.querySelector('.btn-menu');
let on_off = true;


window.onscroll = () => {
    
    // Sticky Menu
    if (window.pageYOffset >= sticky) {
       menu.classList.add('sticky');
       main.style.marginTop = '170px';
    }else{
        menu.classList.remove('sticky');
        main.style.marginTop = '100px'; 
    }

    // Go Top Button
    if (window.pageYOffset >= 500) {
        document.querySelector('.go-top').style.right = "0%";
    }else{
        document.querySelector('.go-top').style.right = "-100%";
    }

    document.querySelector('.go-top').addEventListener('click', () => {
        document.body.scrollTop = '0';
        document.documentElement.scrollTop = '0';
    });

}

// Responsive Menu
btnMenu.addEventListener('click', () => {
    
    if (on_off) {
       linkContainer.style.left = "0";
       
       on_off = false;
    }else{
        on_off = false;
        linkContainer.style.left = "-100%";
        on_off = true;
    }

});


// Gallery
const images = document.querySelectorAll('.img-card img');
const modal = document.querySelector('.modal-gallery');
const imgModal = document.querySelector('#imgModal');
const closeModal = document.querySelector('.close-modal');
const captionImg = document.querySelector('.captionModal');
const modalGalleryList = document.querySelectorAll('.gallery-list');

images.forEach((images) => {
   images.addEventListener('click', () => {
       modal.style.display = "block";
       imgModal.src = images.src;
       captionImg.innerHTML = images.alt;
   });
});

modalGalleryList.forEach(img => img.addEventListener('click', lightbox));

function lightbox (event) {
  imgModal.src = event.target.src;

  captionImg.innerHTML = event.target.alt;
}

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});
