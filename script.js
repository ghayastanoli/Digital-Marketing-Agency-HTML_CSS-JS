document.addEventListener('DOMContentLoaded', () => {
    const upperNav = document.querySelector('.upper-nav-con');
    const middleNav = document.querySelector('.middle-nav-con');

    const handleScroll = () => {
        const upperNavHeight = upperNav.offsetHeight;

        if (window.scrollY > 0) {
            upperNav.classList.add('sticky');
        } else {
            upperNav.classList.remove('sticky');
        }

        if (window.scrollY > upperNavHeight) {
            middleNav.classList.add('sticky');
            middleNav.style.top = `${upperNavHeight}px`; // Adjust `top` to avoid overlap
        } else {
            middleNav.classList.remove('sticky');
            middleNav.style.top = '0';
        }
    };

    window.addEventListener('scroll', handleScroll);
});




document.addEventListener('DOMContentLoaded', () => {
    const logos = document.querySelectorAll('.logo');
    const logoText = document.querySelector('.logo-text p');
    const inpBtn = document.querySelector('.inp-btn');

    const animateElements = () => {
        const triggerPoint = window.innerHeight * 0.8; // Trigger animation slightly before the elements are fully in view

        // Animate logo-text p
        const logoTextTop = logoText.getBoundingClientRect().top;
        if (logoTextTop < triggerPoint) {
            logoText.classList.add('animate');
        }

        // Animate logos
        logos.forEach((logo, index) => {
            const logoTop = logo.getBoundingClientRect().top;

            if (logoTop < triggerPoint) {
                setTimeout(() => {
                    logo.classList.add('animate'); // Add animation class with delay
                }, index * 200); // Stagger animation for each logo
            }
        });

        // Animate inp-btn
        const inpBtnTop = inpBtn.getBoundingClientRect().top;
        if (inpBtnTop < triggerPoint) {
            inpBtn.classList.add('animate');
        }
    };

    window.addEventListener('scroll', animateElements);
});



const parts = document.querySelectorAll('.part');

parts.forEach(part => {
  part.addEventListener('mouseover', () => {
    parts.forEach(p => p.style.flex = '1'); // Reset all parts
    part.style.flex = '1.8'; // Expand hovered part
  });

  part.addEventListener('mouseout', () => {
    parts.forEach(p => p.style.flex = '1'); // Reset to default
  });
});
