const hamburger = document.getElementById("hamburger")
const navigation = document.getElementById("navigation");
const contactForm = document.getElementById('contact-form');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--open');
    navigation.classList.toggle('nav--open');

    console.log('aaa');
});

contactForm.addEventListener('submit', () => {
    let emailSubject = document.getElementById('title').value;
    let emailBody = document.getElementById('content').value;

    contactForm.action = `mailto:patrykjelonek97@gmail.com?subject=${emailSubject}&body=${emailBody}`;
});