
// Sidebar toggle code
const sideBar = document.querySelector('.sidebar')

const button = document.querySelector('.toggle-btn')

button.addEventListener('click', toggleSidebar);

function toggleSidebar(){
    sideBar.classList.toggle('show');
}


// Modal Code

const buttons = document.querySelectorAll('.btn');
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.close-btn')

// console.log(buttons.length);

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', openModal);

    function openModal(){
        overlay.classList.add('show-modal');
    }
}

closeBtn.addEventListener('click', closeModal)

function closeModal(){
    overlay.classList.remove('show-modal');
}
