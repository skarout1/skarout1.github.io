document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const errorElements = document.querySelectorAll('.error');
            errorElements.forEach(element => {
                element.style.display = 'none';
            });
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;
            
            if (name === '') {
                document.getElementById('name-error').style.display = 'block';
                isValid = false;
            }
            
            if (email === '' || !isValidEmail(email)) {
                document.getElementById('email-error').style.display = 'block';
                isValid = false;
            }
            
            if (service === '') {
                document.getElementById('service-error').style.display = 'block';
                isValid = false;
            }
            
            if (message === '') {
                document.getElementById('message-error').style.display = 'block';
                isValid = false;
            }
            
            if (isValid) {
                contactForm.style.display = 'none';
                document.getElementById('form-success').style.display = 'block';
            }
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});