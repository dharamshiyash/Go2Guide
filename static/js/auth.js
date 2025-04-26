// Toggle password visibility
document.addEventListener('DOMContentLoaded', () => {
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function() {
            const passwordInput = this.previousElementSibling;
            
            // Toggle password visibility
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            }
        });
    });
    
    // Password strength meter
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        const strengthBar = document.querySelector('.strength-bar');
        const strengthText = document.querySelector('.strength-text');
        
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            const strength = calculatePasswordStrength(password);
            
            // Update strength bar
            strengthBar.style.width = `${strength}%`;
            
            // Update color based on strength
            if (strength < 30) {
                strengthBar.style.backgroundColor = '#e74c3c'; // Weak (red)
                strengthText.textContent = 'Weak password';
            } else if (strength < 60) {
                strengthBar.style.backgroundColor = '#f39c12'; // Medium (orange)
                strengthText.textContent = 'Medium password';
            } else {
                strengthBar.style.backgroundColor = '#2ecc71'; // Strong (green)
                strengthText.textContent = 'Strong password';
            }
        });
    }
    
    // Form validation
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simple validation
            if (!isValidEmail(email)) {
                showFormError('Please enter a valid email address');
                return;
            }
            
            if (password.length < 6) {
                showFormError('Password must be at least 6 characters');
                return;
            }
            
            // Simulate login (in a real app, this would be an API call)
            simulateLogin(email, password);
        });
    }
    
    // Signup form validation
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const termsChecked = document.getElementById('terms').checked;
            
            // Simple validation
            if (fullname.trim() === '') {
                showFormError('Please enter your full name');
                return;
            }
            
            if (!isValidEmail(email)) {
                showFormError('Please enter a valid email address');
                return;
            }
            
            if (password.length < 6) {
                showFormError('Password must be at least 6 characters');
                return;
            }
            
            if (password !== confirmPassword) {
                showFormError('Passwords do not match');
                return;
            }
            
            if (!termsChecked) {
                showFormError('You must agree to the Terms of Service and Privacy Policy');
                return;
            }
            
            // Simulate signup (in a real app, this would be an API call)
            simulateSignup(fullname, email, password);
        });
    }
});

// Calculate password strength (simple implementation)
function calculatePasswordStrength(password) {
    if (!password) return 0;
    
    let strength = 0;
    
    // Length contribution (up to 40%)
    strength += Math.min(password.length * 4, 40);
    
    // Character variety contribution
    if (/[a-z]/.test(password)) strength += 10; // Lowercase letters
    if (/[A-Z]/.test(password)) strength += 10; // Uppercase letters
    if (/[0-9]/.test(password)) strength += 10; // Numbers
    if (/[^a-zA-Z0-9]/.test(password)) strength += 10; // Special characters
    
    // Penalize repetitive patterns
    if (/(.)\1{2,}/.test(password)) strength -= 10;
    
    return Math.max(0, Math.min(strength, 100));
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form error
function showFormError(message) {
    // Check if error element already exists
    let errorElement = document.querySelector('.form-error');
    
    if (!errorElement) {
        // Create error element if it doesn't exist
        errorElement = document.createElement('div');
        errorElement.className = 'form-error';
        
        // Insert after the form
        const form = document.querySelector('.auth-form');
        form.parentNode.insertBefore(errorElement, form.nextSibling);
    }
    
    // Set error message
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    
    // Add CSS for error message if not already in the document
    if (!document.getElementById('error-styles')) {
        const style = document.createElement('style');
        style.id = 'error-styles';
        style.textContent = `
            .form-error {
                background-color: #ffebee;
                color: #e53935;
                padding: 10px 15px;
                border-radius: 5px;
                margin-bottom: 20px;
                font-size: 0.9rem;
                border-left: 3px solid #e53935;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Hide error after 5 seconds
    setTimeout(() => {
        errorElement.style.display = 'none';
    }, 5000);
}

// Simulate login (for demo purposes)
function simulateLogin(email, password) {
    // Show loading state
    const loginButton = document.querySelector('.btn-auth');
    const originalText = loginButton.textContent;
    loginButton.textContent = 'Logging in...';
    loginButton.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // In a real app, this would be an API call to your backend
        
        // For demo, just redirect to home page
        showNotification('Login successful! Redirecting...', 'success');
        
        setTimeout(() => {
            window.location.href = '../../index.html';
        }, 1500);
    }, 1500);
}

// Simulate signup (for demo purposes)
function simulateSignup(fullname, email, password) {
    // Show loading state
    const signupButton = document.querySelector('.btn-auth');
    const originalText = signupButton.textContent;
    signupButton.textContent = 'Creating account...';
    signupButton.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // In a real app, this would be an API call to your backend
        
        // For demo, just redirect to login page
        showNotification('Account created successfully! Please log in.', 'success');
        
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    }, 1500);
}


function Username_Exist(){
    alert("Username Exist")
}

function Password_mismatch(){
    alert("Password Don't Match")
}