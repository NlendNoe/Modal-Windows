'use strict'

const modal = document.querySelector('.modal')
const  overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal = document.querySelectorAll('.show-modal')

for ( let i = 0; i < btnOpenModal.length; i++)
    btnOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
    })

btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})
// Sortir en cliquant sur ailleurs que sur le bouttons 'x'
// overlay.addEventListener('click', function () {
//     modal.classList.add('hidden')
//     overlay.classList.add('hidden')
// })
