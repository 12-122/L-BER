// AOS (Animate On Scroll) Kütüphanesini Başlat
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: true
    });
});

// Mobil Menü Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navbar.classList.toggle('active');
            
            // Menü ikonu değiştirme
            if (navbar.classList.contains('active')) {
                menuBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
});

// Sayfa Kaydırma Animasyonu
document.addEventListener('DOMContentLoaded', () => {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = scrollLink.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Mobil menüyü kapat
                const navbar = document.querySelector('.navbar');
                const menuBtn = document.querySelector('.menu-btn');
                
                if (navbar.classList.contains('active')) {
                    navbar.classList.remove('active');
                    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    }
});

// Sayfalar Arası Animasyon
document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    body.classList.add('fade-in');

    // Yeni sayfaya geçiş animasyonu
    const pageLinks = document.querySelectorAll('a:not([href^="#"])');
    
    for (const link of pageLinks) {
        link.addEventListener('click', (e) => {
            // Aynı site içi linkler için geçerli
            if (link.hostname === window.location.hostname) {
                e.preventDefault();
                
                body.classList.add('fade-out');
                
                setTimeout(() => {
                    window.location.href = link.href;
                }, 300);
            }
        });
    }
});

// Scroll Olayları
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    // Header'ı sabitleme
    if (window.scrollY > 100) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '20px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    // Yukarı çıkma butonu gösterme/gizleme
    if (scrollTopBtn) {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    }
});

// Proje Kartları Hover Efekti
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    for (const card of projectCards) {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.project-img').style.height = '220px';
        });
        
        card.addEventListener('mouseleave', () => {
            card.querySelector('.project-img').style.height = '200px';
        });
    }
});

// Gradient Renk Animasyonu
document.addEventListener('DOMContentLoaded', () => {
    const gradientElements = document.querySelectorAll('.logo h1, .footer-logo h2');
    let hue = 0;
    
    setInterval(() => {
        hue = (hue + 1) % 360;
        const primaryColor = `hsl(${hue}, 70%, 45%)`;
        const secondaryColor = `hsl(${(hue + 60) % 360}, 70%, 45%)`;
        
        for (const element of gradientElements) {
            element.style.backgroundImage = `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`;
        }
    }, 100);
});

// Yükleme Animasyonu
window.addEventListener('load', () => {
    const loader = document.querySelector('.preloader');
    
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 500);
    }
});

// Rastgele Sayılarla Animasyon Oluşturma
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Blob Animasyonunu Geliştirme
document.addEventListener('DOMContentLoaded', () => {
    const blobs = document.querySelectorAll('.blob');
    
    for (const blob of blobs) {
        const animationDuration = randomBetween(15, 30);
        blob.style.animation = `blob-move ${animationDuration}s infinite alternate`;
    }
}); 
