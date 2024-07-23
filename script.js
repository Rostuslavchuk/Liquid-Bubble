document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    document.querySelector('.circle').onclick = (e) => {
        for (let i = 0; i < 50; i++) {
            let circleInside = document.createElement('i');
            circleInside.classList.add('circleInside');
            let randomX = (Math.random() - 0.5) * window.innerWidth; // Math.random() - 0.5 - -0.5 до 0.5 * window.innerWidth
            let randomY = (Math.random() - 0.5) * window.innerHeight;

            let randomSize = Math.random() * 60 + 10; // від 10 до 70
            let randomDuration = Math.random() * 3 + 2; // від 2 до 5

            circleInside.style.width = randomSize + 'px';
            circleInside.style.height = randomSize + 'px';
            circleInside.style.setProperty('--x', randomX+'px');
            circleInside.style.setProperty('--y', randomY+'px');

            circleInside.style.animation = `circles ${randomDuration}s ease forwards`; // forwards - застосує останні стилі тобто той шо має max percentage

            document.body.appendChild(circleInside);

            setTimeout(() => {
                circleInside.remove();
            }, 5000);
        }
    }
});

