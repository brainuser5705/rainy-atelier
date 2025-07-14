document.querySelector('.hamburger').addEventListener('click', () => {
    // hide the hamburger menu icon after it is clicked
    document.querySelector('.hamburger').classList.toggle('hidden');

    // reverse the landing and popup
    document.querySelector('#landing').classList.toggle('hidden');
    document.querySelector('#landing-popup').classList.toggle('hidden');
});