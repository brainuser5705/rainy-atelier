document.querySelector('#hamburger').addEventListener('click', () => {
    document.querySelector('#landing').classList.toggle('hidden');
    document.querySelector('#hamburger').classList.toggle('hidden');
    document.querySelector('#landing-popup').classList.toggle('hidden');
});