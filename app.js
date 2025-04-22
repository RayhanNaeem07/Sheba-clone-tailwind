document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navContainer = document.querySelector('.nav-container');
    navContainer.classList.toggle('hidden');
    this.querySelector('i').classList.toggle('fa-bars');
    this.querySelector('i').classList.toggle('fa-times');
});