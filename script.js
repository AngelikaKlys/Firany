document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.querySelector('header');

    const refreshHeaderClass = () => {
        if (window.scrollY === 0) {
            headerContainer.classList.remove('header--sticky');
        } else {
            headerContainer.classList.add('header--sticky');
        }
    };

    refreshHeaderClass();

    document.addEventListener('scroll', () => {
        refreshHeaderClass();
    });

    document.querySelectorAll('.menu a').forEach(el => el.addEventListener('click', (el) => {
        const targetEl = document.getElementById(el.target.getAttribute('target-section'));
        const y = targetEl.getBoundingClientRect().top + window.scrollY - 50;

        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }));
});