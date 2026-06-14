document.addEventListener('DOMContentLoaded', () => {
    // Navigation scroll effect
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll animations using Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for multiple elements
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Resume download button
    const downloadBtn = document.getElementById('downloadResume');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = 'image & resume/anand.pdf';
            link.download = 'Anand Kumar Prajapati Resume.pdf';
            link.click();
            
            // Show feedback
            downloadBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Downloaded!
            `;
            
            setTimeout(() => {
                downloadBtn.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7,10 12,15 17,10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Resume
                `;
            }, 2000);
        });
    }

    // Send contact form without leaving the portfolio page.
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            formStatus.textContent = 'Sending your message...';
            formStatus.className = 'form-status';
            submitButton.disabled = true;
            submitButton.innerHTML = 'Sending...';

            try {
                const name = document.getElementById('contactName').value.trim();
                const email = document.getElementById('contactEmail').value.trim();
                const problem = document.getElementById('contactProblem').value.trim();
                const formData = new FormData(contactForm);
                formData.append('_replyto', email);
                formData.append('Message', `Name: ${name}\nEmail: ${email}\n\nProblem Description:\n${problem}`);

                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        Accept: 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Message could not be sent.');
                }

                contactForm.reset();
                formStatus.textContent = 'Message sent successfully.';
                formStatus.classList.add('success');
            } catch (error) {
                formStatus.textContent = 'Message was not sent. Please try again or contact me on LinkedIn/GitHub.';
                formStatus.classList.add('error');
            } finally {
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            }
        });
    }

    // Add hover effect to skill tags
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Parallax effect for hero background decoration
    window.addEventListener('scroll', () => {
        const decoration = document.querySelector('.hero-bg-decoration');
        if (decoration) {
            const scrolled = window.scrollY;
            decoration.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Typing effect for hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transition = 'opacity 0.5s ease';
        }, 300);
    }

    // Add active state to nav links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Console easter egg
    console.log('%c👋 Hello, fellow developer!', 'font-size: 20px; color: #3b82f6;');
    console.log('%cInterested in working together? Reach out!', 'font-size: 14px; color: #9ca3af;');
});

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--primary) !important;
    }
    .nav-links a.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

const texts = [
    "Full Stack Developer",
    "MERN Developer",
    "Software Engineer"
];
let textIndex = 0;
let charIndex = 0;
const changingText = document.getElementById("changing-text");
function typeEffect() {
    if(charIndex < texts[textIndex].length){
        changingText.textContent +=
        texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect,100);
    }else{
        setTimeout(eraseEffect,1500);
    }
}
function eraseEffect(){
    if(changingText.textContent.length > 0){
        changingText.textContent =
        changingText.textContent.slice(0,-1);
        setTimeout(eraseEffect,50);
    }else{
        textIndex++;
        if(textIndex >= texts.length){
            textIndex = 0;
        }
        charIndex = 0;
        setTimeout(typeEffect,300);
    }
}
if(changingText){
    typeEffect();
}
