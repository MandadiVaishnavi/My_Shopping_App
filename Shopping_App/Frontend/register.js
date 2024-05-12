document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const messageDiv = document.getElementById('message');
  
    registerForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(registerForm);
      const email = formData.get('email');
      const password = formData.get('password');
  
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
  
        if (!response.ok) {
          throw new Error('Registration failed');
        }
  
        const data = await response.json();
        messageDiv.textContent = data.message;
      } catch (error) {
        console.error('Error registering user:', error);
        messageDiv.textContent = 'An error occurred. Please try again later.';
      }
    });
  });
  