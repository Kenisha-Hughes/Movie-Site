document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form');
    
    const nameInput = document.querySelector('input[type="text"]');
    const phoneInput = document.querySelector('input[type="tel"]');
    const emailInput = document.querySelector('input[type="email"]');
    const messageInput = document.querySelector('textarea');
    const submitButton = document.querySelector('.btn');
    
    function validateForm() {
        let isValid = true;
    
        if (nameInput.value.trim() === '') {
            isValid = false;
            alert('Please enter your name.');
        }
        const phonePattern = /^[+]?[0-9]{1,4}[ \-]?[0-9]{1,4}[ \-]?[0-9]{1,4}[ \-]?[0-9]{1,4}$/;
        if (!phonePattern.test(phoneInput.value)) {
            isValid = false;
            alert('Please enter a valid phone number.');
        }
        
        if (emailInput.value.trim() === '' || !emailInput.checkValidity()) {
            isValid = false;
            alert('Please enter a valid email address.');
        }
        if (messageInput.value.trim() === '') {
            isValid = false;
            alert('Please enter your message.');
        }

        return isValid;
    }


    function showSuccessMessage() {
        alert('Thank you for contacting us! We will get back to you shortly.');
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        if (validateForm()) {
            showSuccessMessage();
            form.reset();
        }
    });
});
