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
document.addEventListener('DOMContentLoaded', () => {
    const sec6Container = document.querySelector('.sec-6-container');

    const animateSection = () => {
        const triggerPoint = window.innerHeight * 1.9; // Trigger slightly before the element is fully in view
        const sec6Top = sec6Container.getBoundingClientRect().top;

        if (sec6Top < triggerPoint) {
            sec6Container.classList.add('animate'); // Add the animation class
            window.removeEventListener('scroll', animateSection); // Remove event listener after animation is triggered
        }
    };

    window.addEventListener('scroll', animateSection);
});

document.addEventListener('DOMContentLoaded', () => {
    const sec6Container = document.querySelector('.sec5');

    const animateSection = () => {
        const triggerPoint = window.innerHeight * 1.9; // Trigger slightly before the element is fully in view
        const sec6Top = sec6Container.getBoundingClientRect().top;

        if (sec6Top < triggerPoint) {
            sec6Container.classList.add('animate'); // Add the animation class
            window.removeEventListener('scroll', animateSection); // Remove event listener after animation is triggered
        }
    };

    window.addEventListener('scroll', animateSection);
});

document.addEventListener('DOMContentLoaded', () => {
    const sec6Container = document.querySelector('.sec7');

    const animateSection = () => {
        const triggerPoint = window.innerHeight * 1.9; // Trigger slightly before the element is fully in view
        const sec6Top = sec6Container.getBoundingClientRect().top;

        if (sec6Top < triggerPoint) {
            sec6Container.classList.add('animate'); // Add the animation class
            window.removeEventListener('scroll', animateSection); // Remove event listener after animation is triggered
        }
    };

    window.addEventListener('scroll', animateSection);
});


document.addEventListener('DOMContentLoaded', () => {
    const sec6Container = document.querySelector('.sec-10-content');

    const animateSection = () => {
        const triggerPoint = window.innerHeight * 1.9; // Trigger slightly before the element is fully in view
        const sec6Top = sec6Container.getBoundingClientRect().top;

        if (sec6Top < triggerPoint) {
            sec6Container.classList.add('animate'); // Add the animation class
            window.removeEventListener('scroll', animateSection); // Remove event listener after animation is triggered
        }
    };

    window.addEventListener('scroll', animateSection);
});



document.addEventListener('DOMContentLoaded', () => {
    const firstCard = document.getElementById('card-left'); // First card
    const thirdCard = document.getElementById('card-right'); // Third card

    const animateCards = () => {
        const triggerPoint = window.innerHeight * 0.8; // Adjust trigger point if needed

        // Animate first card
        if (firstCard.getBoundingClientRect().top < triggerPoint) {
            firstCard.classList.add('animate');
        }

        // Animate third card
        if (thirdCard.getBoundingClientRect().top < triggerPoint) {
            thirdCard.classList.add('animate');
        }
    };

    window.addEventListener('scroll', animateCards);
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



////section7-dynamic-switching/////
document.addEventListener('DOMContentLoaded', () => {
    const headingBtns = document.querySelectorAll('.heading-btn');
    const dynamicContent = document.getElementById('dynamic-content');
    const dynamicImage = document.getElementById('dynamic-image');

    // Content and image source for each heading-btn
    const contentMap = {
        luxury: {
            text: `
                <div class="sec-7-upper-text">
                    <p class="sec-7-p1">Real Estate Marketing</p>
                    <h3>PPC Ads Specialized for Luxury Communities</h3>
                    <p class="sec-7-p2">Publish targeted PPC ads to luxury community users that other agencies don’t know how to reach.</p>
                </div>
                <div class="sec-7-num-text">
                    <div class="num1">
                        <p>3M$</p>
                    </div>
                    <div class="num2">
                        <p>4,000%</p>
                    </div>
                </div>
                <div class="sec-7-num-desc">
                    <div class="desc1">
                        <p>Additional Revenue Generated</p>
                    </div>
                    <div class="desc2">
                        <p>ROAS</p>
                    </div>
                </div>
                <div class="name">
                    <p>Wade Warren</p>
                </div>
                <div class="lst-desc">
                    <p>Our conversions increased by 34% after just 1 month of running new PPC campaigns. DMA guided us through every step of the planning phase, from research to launch.</p>
                </div>
            `,
            image: "images/card-imgs/luxury_communities.webp"
        },
        franchise: {
            text: `
                <div class="sec-7-upper-text">
                    <p class="sec-7-p1">Multi-Location Marketing</p>
                    <h3>Franchise-Focused SEO</h3>
                    <p class="sec-7-p2">Make your online presence work for you — even when your physical locations are closed.</p>
                </div>
                <div class="sec-7-num-text">
                    <div class="num1">
                        <p>+4,800%</p>
                    </div>
                    <div class="num2">
                        <p>$13M</p>
                    </div>
                </div>
                <div class="sec-7-num-desc">
                    <div class="desc1">
                        <p>Increase in Organic Traffic</p>
                    </div>
                    <div class="desc2">
                        <p>Revenue Generated</p>
                    </div>
                </div>
                <div class="name">
                    <p>James McNamara</p>
                </div>
                <div class="lst-desc">
                    <p>“DMA took our site from 300 visitors a day to over 10,000 in just 3 months by helping us build high-quality backlinks.</p>
                </div>
            `,
            image: "images/card-imgs/franchise.webp"
        },
        ecommerce: {
            text: `
                <div class="sec-7-upper-text">
                    <p class="sec-7-p1">Online Retail Marketing</p>
                    <h3>Social Media Marketing for E-Commerce</h3>
                    <p class="sec-7-p2">Build a brand around your product and leverage word-of-mouth with your following.</p>
                </div>
                <div class="sec-7-num-text">
                    <div class="num1">
                        <p>+400k</p>
                    </div>
                    <div class="num2">
                        <p>1.2m</p>
                    </div>
                </div>
                <div class="sec-7-num-desc">
                    <div class="desc1">
                        <p>New Foloowers</p>
                    </div>
                    <div class="desc2">
                        <p>Average Reach Per Organic Post</p>
                    </div>
                </div>
                <div class="name">
                    <p>Serena DiSora</p>
                </div>
                <div class="lst-desc">
                    <p>We gave them all our brand assets and they helped us put together a full editorial calendar, all scheduled to post ahead of schedule. And it really helped increase our overall brand awareness, even off social media platforms.</p>
                </div>
            `,
            image: "images/card-imgs/ecommerce.webp"
        },
        crypto: {
            text: `
                <div class="sec-7-upper-text">
                    <p class="sec-7-p1">Crypto Marketing</p>
                    <h3>Expert Guidance for Crypto Campaigns</h3>
                    <p class="sec-7-p2">Target audiences interested in cryptocurrencies with precision marketing campaigns.</p>
                </div>
                <div class="sec-7-num-text">
                    <div class="num1">
                        <p>2M$</p>
                    </div>
                    <div class="num2">
                        <p>3,500%</p>
                    </div>
                </div>
                <div class="sec-7-num-desc">
                    <div class="desc1">
                        <p>Revenue Boost</p>
                    </div>
                    <div class="desc2">
                        <p>ROI</p>
                    </div>
                </div>
                <div class="name">
                    <p>Emily Davis</p>
                </div>
                <div class="lst-desc">
                    <p>DMA's expertise in crypto marketing gave us the edge we needed to succeed in a highly competitive market.</p>
                </div>
            `,
            image: "images/card-imgs/crypto.webp"
        },
        others: {
            text: `
                <div class="sec-7-upper-text">
                    <p class="sec-7-p1">Custom Marketing</p>
                    <h3>Made Just for You.</h3>
                    <p class="sec-7-p2">Unique solutions tailor-made to help you crush your business and industry goals.</p>
                </div>
                <div class="sec-7-num-text">
                    <div class="num1">
                        <p>+73%</p>
                    </div>
                    <div class="num2">
                        <p>$850k</p>
                    </div>
                </div>
                <div class="sec-7-num-desc">
                    <div class="desc1">
                        <p>Marketing Spend Efficiency</p>
                    </div>
                    <div class="desc2">
                        <p>Estimated Savings</p>
                    </div>
                </div>
                <div class="name">
                    <p>Joe D’Souza</p>
                </div>
                <div class="lst-desc">
                    <p>We typically have to hire multiple agencies to help us with our different businesses. But DMA had the breadth of expertise to assist us with marketing across our various industries and brands.</p>
                </div>
            `,
            image: "images/card-imgs/ecommerce.webp"
        },

    };

    // Update content and image based on button click
    headingBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            headingBtns.forEach(b => b.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Update the dynamic content
            const selectedContent = btn.getAttribute('data-content');
            dynamicContent.innerHTML = contentMap[selectedContent].text;

            // Update the dynamic image
            dynamicImage.src = contentMap[selectedContent].image;
            dynamicImage.alt = selectedContent.charAt(0).toUpperCase() + selectedContent.slice(1);
        });
    });
});



// Select elements
const hamburgerMenu = document.getElementById('hamburger-menu');
const middleNavOverlay = document.getElementById('middle-nav-overlay');

// Toggle overlay visibility
hamburgerMenu.addEventListener('click', () => {
    middleNavOverlay.classList.toggle('active'); // Show or hide overlay
    document.body.style.overflow = middleNavOverlay.classList.contains('active') ? 'hidden' : ''; // Prevent scrolling
});

