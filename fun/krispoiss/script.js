const dvdContainer = document.getElementById('dvdContainer');
const dvdLogo = document.getElementById('dvdLogo');

const maxX = window.innerWidth - dvdContainer.clientWidth;
const maxY = window.innerHeight - dvdContainer.clientHeight;

let x = 0;
let y = 0;
let xDirection = 1;
let yDirection = 1;

function animate() {
    x += 5 * xDirection;
    y += 5 * yDirection;

    dvdContainer.style.left = x + 'px';
    dvdContainer.style.top = y + 'px';

    if (x <= 0 || x >= maxX) {
        xDirection *= -1;
        //dvdLogo.style.backgroundColor = getRandomColor();
    }

    if (y <= 0 || y >= maxY) {
        yDirection *= -1;
        //dvdLogo.style.backgroundColor = getRandomColor();
    }

    requestAnimationFrame(animate);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

animate();
