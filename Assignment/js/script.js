// greeting prompt for landing page
window.onload = function() {
        let name = prompt("Please enter your name:");
    if (name) {
    document.getElementById("greeting").innerText = 'Welcome, ' + name + '!';
    }
    };
    
    // Contact Form Submission
    document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission
    
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let item = document.getElementById("item").value;
    
    if (!email || !message) {
    document.getElementById("formMessage").innerText = "Please fill all required fields.";
    return;
    } else {
    document.getElementById("formMessage").innerText = "";
    }
    
    // Simulate sending an email
    var randomNum = Math.floor(Math.random() * 10000);
    let subject = `Message to FLO Fan Page #${randomNum}`;
    let mailtoLink = `mailto:imaginarybusiness@example.com?cc=your-email@example.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('From: ' + email + '\nMessage: ' + message + '\nItem: ' + item)}`;
    
    // show success message
    document.getElementById("contactForm").style.display = 'none';
    document.getElementById("successMessage").style.display = 'block';
    document.getElementById("successMessage").innerHTML = `Thank you for your message! You will be redirected to the homepage shortly.`;
    
        setTimeout(() => {
            window.location.href = "index.html"; // Redirect after 5 seconds
        }, 5000);
        
        window.location.href = mailtoLink; // Open the email client
    };