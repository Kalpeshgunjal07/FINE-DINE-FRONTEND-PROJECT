function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function revealContact() {
    const contactInfo = document.getElementById('about-contact');
    contactInfo.style.display = contactInfo.style.display === 'none' ? 'block' : 'none';
}

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Booking request submitted!');
    this.reset();
});

document.getElementById('visit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Visit request submitted!');
    this.reset();
});
