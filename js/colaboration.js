const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const colabHeader = document.querySelector('.colab-header');
const colabContainer = document.querySelector('.colab-container');

let scrollAmount = 0;
const itemWidth = document.querySelector('.colab-item').offsetWidth;
let totalWidth = 0;

// Calculate total width of all items
document.querySelectorAll('.colab-item').forEach(item => {
    totalWidth += item.offsetWidth;
});

// Hide/show scroll buttons based on total width
if (totalWidth <= colabContainer.offsetWidth) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
}

prevBtn.addEventListener('click', () => {
    scrollAmount += itemWidth;
    colabHeader.style.transform = `translateX(${scrollAmount}px)`;
});

nextBtn.addEventListener('click', () => {
    scrollAmount -= itemWidth;
    colabHeader.style.transform = `translateX(${scrollAmount}px)`;
});
