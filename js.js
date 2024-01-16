document.addEventListener('DOMContentLoaded', function () {

    const gameItems = document.querySelectorAll('.game-item');

    gameItems.forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });

    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
