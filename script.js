// Menu Mobile Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animar as barras para formar um X
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.classList.toggle('active');
        });
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            
            const bars = document.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.classList.remove('active');
            });
        });
    });
    
    // Header com fundo ao rolar
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Formulário de contato
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio de formulário
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = 'ENVIANDO...';
            
            // Simular um atraso de envio
            setTimeout(function() {
                // Limpar campos
                const inputs = contactForm.querySelectorAll('input, textarea, select');
                inputs.forEach(input => {
                    input.value = '';
                });
                
                // Mostrar mensagem de sucesso
                submitButton.textContent = 'MENSAGEM ENVIADA!';
                submitButton.style.backgroundColor = '#00FF00';
                
                // Restaurar botão após 3 segundos
                setTimeout(function() {
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                    submitButton.style.backgroundColor = '';
                }, 3000);
            }, 1500);
        });
    }
    
    // Animação de elementos ao scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .portfolio-item, .about-content, .about-image, .contact-info, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Adicionar classe para animação CSS
    document.querySelectorAll('.service-card, .portfolio-item, .about-content, .about-image, .contact-info, .contact-form').forEach(element => {
        element.classList.add('animate-on-scroll');
    });
    
    window.addEventListener('scroll', animateOnScroll);
    // Executar uma vez para elementos já visíveis
    animateOnScroll();
});

// Adicionar estilos CSS para animações
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-on-scroll.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        header.scrolled {
            background-color: rgba(0, 0, 0, 0.95);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
        }
        
        .menu-toggle .bar.active:nth-child(1) {
            transform: translateY(9px) rotate(45deg);
        }
        
        .menu-toggle .bar.active:nth-child(2) {
            opacity: 0;
        }
        
        .menu-toggle .bar.active:nth-child(3) {
            transform: translateY(-9px) rotate(-45deg);
        }
    `;
    document.head.appendChild(style);
});
