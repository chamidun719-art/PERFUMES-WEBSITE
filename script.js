document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.classList.remove('shadow-lg');
            // Keep it semi-transparent on top or transparent depending on design
            if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
                navbar.style.background = 'rgba(10, 10, 10, 0.8)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            }
        }
    });

    // Add into cart simulation
    const addButtons = document.querySelectorAll('button');
    const cartCount = document.querySelector('.absolute.top-0.right-0');
    let count = 0;

    addButtons.forEach(button => {
        if (button.innerText === 'ADD TO CART' || button.innerText === 'SUBSCRIBE') {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                if (button.innerText === 'SUBSCRIBE') {
                    alert('Thank you for subscribing to Ceylon Essence!');
                    return;
                }

                // Animate button
                const originalText = button.innerText;
                button.innerText = 'ADDED';
                button.classList.add('text-green-400');

                count++;
                if (cartCount) cartCount.innerText = count;

                setTimeout(() => {
                    button.innerText = originalText;
                    button.classList.remove('text-green-400');
                }, 2000);
            });
        }
    });

    // Mobile menu toggle (simple implementation)
    const mobileMenuBtn = document.querySelector('.md\\:hidden button');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            // In a real app, toggle a mobile menu container. 
            // For now, we'll just alert or log since we didn't build the drawer.
            // Let's add a simple dropdown if needed or just leave it for now.
            alert('Mobile menu would open here. Resize to desktop for best experience.');
        });
    }
});
