const backgrounds = [
	"img/main/lunbo01.png",
	"img/main/lunbo02.png",
	"img/main/lunbo03.png",
	"img/main/lunbo04.png",
	"img/main/lunbo05.png"
];

let currentIndex = 0;
let mainElement = document.querySelector('.main');
let intervalId = null;

// 预加载图片
function preloadImages() {
	backgrounds.forEach((background) => {
		const img = new Image();
		img.src = background;
	});
}

// 初始化背景和预加载
function initBackground() {
	mainElement.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
	preloadImages();
}

initBackground();

function changeBackground(manual) {
	mainElement.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
	updateDots(currentIndex);
	if (manual) {
		clearInterval(intervalId);
		intervalId = null;
	}
}

function startAutoSlideshow() {
	if (!intervalId) {
		intervalId = setInterval(function() {
			currentIndex = (currentIndex + 1) % backgrounds.length;
			changeBackground();
		}, 2000);
	}
}

startAutoSlideshow();

const dots = document.querySelectorAll('.dot');
const leftbutton = document.querySelector('.leftArrow');
const rightbutton = document.querySelector('.rightArrow');

function updateDots(index) {
	dots.forEach(dot => {
		dot.classList.remove('active');
	});
	dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
	dot.addEventListener('mouseover', function() {
		currentIndex = index;
		changeBackground(true);
		startAutoSlideshow();
	});
});

leftbutton.addEventListener('click', function() {
	currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
	changeBackground(true);
	startAutoSlideshow();
});

rightbutton.addEventListener('click', function() {
	currentIndex = (currentIndex + 1) % backgrounds.length;
	changeBackground(true);
	startAutoSlideshow();
});

leftbutton.addEventListener('mouseover', function() {
	clearInterval(intervalId);
	intervalId = null;
});
leftbutton.addEventListener('mouseout', function() {
	startAutoSlideshow();
});

rightbutton.addEventListener('mouseover', function() {
	clearInterval(intervalId);
	intervalId = null;
});
rightbutton.addEventListener('mouseout', function() {
	startAutoSlideshow();
});

const eggshell = document.querySelector('.loader');
eggshell.addEventListener('click', function() {
	eggshell.classList.remove('loader');
	eggshell.classList.add('loader-end');
});