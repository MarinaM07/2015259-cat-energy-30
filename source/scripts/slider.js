const slider = document.querySelector('.example__slider');
const before = slider.querySelector('.before');
const after = slider.querySelector('.after');
const rangeBar = slider.querySelector('.example__range-bar');
const rangeToggle = slider.querySelector('.example__range-toggle');
let isDragging = false;

// Функция для установки позиции слайдера
const setSliderPosition = (x) => {
  const sliderWidth = slider.offsetWidth;
  const shift = Math.max(0, Math.min(x, sliderWidth));
  before.style.width = `${shift}px`;
  after.style.width = `${sliderWidth - shift}px`;
  rangeBar.style.left = `${shift}px`;
};

// Обработчик события для перемещения ползунка
const handleMouseMove = (e) => {
  if (!isDragging) {
    return;
  }
  const x = e.pageX - slider.getBoundingClientRect().left;
  setSliderPosition(x);
};

// Обработчики событий для мыши
rangeToggle.addEventListener('mousedown', () => {
  isDragging = true;
});
rangeBar.addEventListener('mousedown', (e) => {
  isDragging = true;
  const x = e.pageX - slider.getBoundingClientRect().left;
  setSliderPosition(x);
});
document.addEventListener('mouseup', () => {
  isDragging = false;
});
document.addEventListener('mousemove', handleMouseMove);

// Обработчики событий для сенсорных экранов
rangeToggle.addEventListener('touchstart', () => {
  isDragging = true;
});
document.addEventListener('touchend', () => {
  isDragging = false;
});
document.addEventListener('touchmove', (e) => {
  if (!isDragging) {
    return;
  }
  const x = e.touches[0].pageX - slider.getBoundingClientRect().left;
  setSliderPosition(x);
});
