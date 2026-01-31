const mainButton = document.getElementById('main-button');
const linkContainer = document.getElementById('link-container');
const cat = document.getElementById('cat');


mainButton.addEventListener('click', () => {
// Reveal links
linkContainer.classList.toggle('hidden');


// Play sound (placeholder)
const audio = new Audio('click-sound.mp3');
audio.play();


// Heart animation (placeholder function)
spawnHearts();
});


function spawnHearts() {
const colors = ['red', 'aqua', 'lightblue', 'purple'];
for (let i = 0; i < 10; i++) {
const heart = document.createElement('div');
heart.textContent = '❤';
heart.style.color = colors[Math.floor(Math.random() * colors.length)];
heart.style.position = 'absolute';
heart.style.left = Math.random() * window.innerWidth + 'px';
heart.style.top = Math.random() * window.innerHeight + 'px';
heart.style.fontSize = '24px';
document.body.appendChild(heart);
setTimeout(() => heart.remove(), 1500);
}
}
