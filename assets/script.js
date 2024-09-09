/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
/* Arrow pour revenir en debut de page* ------------------------------------*/
const up = document.querySelector('.up');

up.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
});
/* FIN ARRON FIN ARROW FIN ARROW FIN ARROW FIN ARROW FIN ARROW FIN ARROW----*/
/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
/* ScrollReveal* -------------------------------------------------------*/
ScrollReveal().reveal('.listeAnimes', { delay: 300 });
ScrollReveal().reveal('.pics', { delay: 400 });
ScrollReveal().reveal('.sousTitre', { delay: 400 });
/* ScrollReveal FIN -----------------------------------------------------*/
/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
/* Modale du burger* --------------------------------------------------------*/
const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
});
/* FIN MODALE --------------------------------------------------------------*/
/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */


