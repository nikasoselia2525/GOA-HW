let currentIndex = 0;
let slides = document.getElementsByClassName('slide');
let dots = document.getElementsByClassName('dot');
let slideInterval;

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].classList.remove('active');
    }

    slides[index].style.display = 'block';
    dots[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 3000);
}

function pauseSlider() {
    clearInterval(slideInterval);
}

startSlider();

function displayText() {
    const input = document.getElementById('userInput').value;
    const display = document.getElementById('displayText');

    if (input.trim() !== "") {
        display.textContent = input;
    } else {
        alert('Please enter some text.');
    }
}


showSlide(currentIndex);
