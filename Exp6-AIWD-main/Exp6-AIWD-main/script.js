document.addEventListener('DOMContentLoaded', function(){
    
    // Hide event details initially
    const detailsElements = document.querySelectorAll(".details");
    detailsElements.forEach(detail => {
        detail.style.display = "none";
    });
    
    
    // Show / Hide event details
    const toggleButtons = document.querySelectorAll(".toggleBtn");
    toggleButtons.forEach(button => {
        button.addEventListener('click', function(){
            
            const eventDiv = this.closest(".event");
            const detailsDiv = eventDiv.querySelector(".details");
            
            // Toggle visibility
            if(detailsDiv.style.display === "none") {
                detailsDiv.style.display = "block";
                this.textContent = "Hide Details";
                
                // Change background color to highlight selected event
                document.querySelectorAll(".event").forEach(ev => {
                    ev.style.background = "#ffffff";
                });
                eventDiv.style.background = "linear-gradient(to right, #f0f4ff, #ffffff)";
                
                // Highlight event title
                document.querySelectorAll(".event h3").forEach(h3 => {
                    h3.style.color = "#333";
                });
                eventDiv.querySelector("h3").style.color = "#667eea";
            }
            else {
                detailsDiv.style.display = "none";
                this.textContent = "Show Details";
                eventDiv.style.background = "#ffffff";
                eventDiv.querySelector("h3").style.color = "#333";
            }
            
        });
    });
    
    
    // Register button redirect
    const registerButtons = document.querySelectorAll(".registerBtn");
    registerButtons.forEach(button => {
        button.addEventListener('click', function(){
            
            const title = this.closest(".event").querySelector("h3").textContent;
            
            window.location.href = "registration.html?event=" + encodeURIComponent(title);
            
        });
    });
    
    
    // Get event name in registration page
    const params = new URLSearchParams(window.location.search);
    const event = params.get("event");
    
    const eventNameInput = document.getElementById("eventName");
    if(event && eventNameInput) {
        eventNameInput.value = event;
    }
    
    
    // Submit button validation
    const submitBtn = document.getElementById("submitBtn");
    if(submitBtn) {
        submitBtn.addEventListener('click', function(){
            
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const mobile = document.getElementById("mobile").value.trim();
            
            let valid = true;
            let errorMessages = [];
            
            // Reset styles
            const inputs = document.querySelectorAll("input");
            inputs.forEach(input => {
                input.style.border = "2px solid #e0e0e0";
            });
            
            const messageDiv = document.getElementById("message");
            messageDiv.textContent = "";
            messageDiv.className = "";
            
            // Validate name
            if(name === "") {
                errorMessages.push("Name cannot be empty");
                document.getElementById("name").style.border = "2px solid #f5576c";
                valid = false;
            }
            
            // Validate email
            const emailPattern = /^\S+@\S+\.\S+$/;
            
            if(!emailPattern.test(email)) {
                errorMessages.push("Invalid email format");
                document.getElementById("email").style.border = "2px solid #f5576c";
                valid = false;
            }
            
            // Validate mobile
            const mobilePattern = /^[0-9]{10,}$/;
            
            if(!mobilePattern.test(mobile)) {
                errorMessages.push("Mobile number must contain at least 10 digits");
                document.getElementById("mobile").style.border = "2px solid #f5576c";
                valid = false;
            }
            
            if(valid) {
                // Success - use DOM methods to prevent XSS
                messageDiv.textContent = ''; // Clear previous content
                
                // Create and append text nodes and elements safely
                messageDiv.appendChild(document.createTextNode('✅ Registration Successful!'));
                messageDiv.appendChild(document.createElement('br'));
                messageDiv.appendChild(document.createTextNode('Welcome, '));
                
                const strongElement = document.createElement('strong');
                strongElement.textContent = name; // Safe: textContent auto-escapes
                messageDiv.appendChild(strongElement);
                
                messageDiv.appendChild(document.createTextNode('!'));
                messageDiv.className = "success";
                
                submitBtn.disabled = true;
                submitBtn.textContent = "✓ Registered";
                
                // Scroll to message
                messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            else {
                // Show errors - build DOM safely
                messageDiv.textContent = ''; // Clear previous content
                
                messageDiv.appendChild(document.createTextNode('❌ Please fix the following errors:'));
                messageDiv.appendChild(document.createElement('br'));
                
                errorMessages.forEach(function(error) {
                    messageDiv.appendChild(document.createTextNode('• ' + error));
                    messageDiv.appendChild(document.createElement('br'));
                });
                
                messageDiv.className = "error";
                
                // Scroll to message
                messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            
        });
    }
    
    
    // Reset button
    const resetBtn = document.getElementById("resetBtn");
    if(resetBtn) {
        resetBtn.addEventListener('click', function(){
            
            document.getElementById("regForm").reset();
            
            const messageDiv = document.getElementById("message");
            messageDiv.textContent = "";
            messageDiv.className = "";
            
            const inputs = document.querySelectorAll("input");
            inputs.forEach(input => {
                input.style.border = "2px solid #e0e0e0";
            });
            
            const submitButton = document.getElementById("submitBtn");
            submitButton.disabled = false;
            submitButton.textContent = "Submit Registration";
            
        });
    }
    
});