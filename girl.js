const girl = document.querySelector('img');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

const OFFSET = 100;

girl.addEventListener('click', () => {
    alert('I\'m yours now! Let\'s tour the World together.');
    window.close();
})

setTimeout(() => {
    h1.style.visibility = "hidden";
    h1.style.opacity = "0";
    h1.style.transition = "visibility 1s, opacity 2s ease-out";
}, 2000)

const mouseHandler = (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    const { x, y, width, height } = girl.getBoundingClientRect();
    const xDistance = x - mouseX + width / 2; //adding girlPosition.width/2 to get the distance from center of the image
    const yDistance = y - mouseY + height / 2;
    const xOffset = OFFSET + width / 2;
    const yOffset = OFFSET + height / 2;
    if (Math.abs(xDistance) <= xOffset && Math.abs(yDistance) <= yOffset) {
        changeGirlPos(x + xOffset / xDistance * 10, y + yOffset / yDistance * 10);
    }
}

document.addEventListener('mousemove', mouseHandler)

setTimeout(() => {
    h2.textContent = "I feel you Mama.I like your patience. Now I'll stop moving for you. Come to me and let's tour the World";
    setTimeout(() => {
        h2.style.visibility = "hidden";
        h2.style.opacity = "0";
        h2.style.transition = "visibility 1s, opacity 2s ease-out";
    }, 3000)
    document.removeEventListener('mousemove', mouseHandler)
}, 30000)

const changeGirlPos = (left, top) => {
    const { width, height } = girl.getBoundingClientRect();
    const windowPosition = document.body.getBoundingClientRect();
    if (left + width / 2 < windowPosition.left) {
        left = Math.max(0, windowPosition.right - width - 100);
    }
    if (left + width / 2 > windowPosition.right) {
        left = windowPosition.left + 100;
    }
    if (top + height / 2 < windowPosition.top) {
        top = Math.max(0, windowPosition.bottom - height - 100);
    }
    if (top + height / 2 > windowPosition.bottom) {
        top = windowPosition.top + 100;
    }
    girl.style.top = `${top}px`;
    girl.style.left = `${left}px`;
};