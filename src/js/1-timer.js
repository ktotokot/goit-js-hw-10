import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

let userSelectedDate;
const inputEl = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('[data-start]');
buttonEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      iziToast.show({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      buttonEl.disabled = true;
    } else {
      buttonEl.disabled = false;
      userSelectedDate = selectedDates[0];
    }
  },
};

flatpickr(inputEl, options);

inputEl.addEventListener('input', event => {
  userSelectedDate = event.target.value;
});

buttonEl.addEventListener('click', () => {
  const days = document.querySelector('[data-days]');
  const hours = document.querySelector('[data-hours]');
  const minutes = document.querySelector('[data-minutes]');
  const seconds = document.querySelector('[data-seconds]');

  buttonEl.disabled = true;
  inputEl.disabled = true;

  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    const diff = userSelectedDate - currentTime;
    const objTime = convertMs(diff);

    days.textContent = objTime.days.toString().padStart(2, '0');
    hours.textContent = objTime.hours.toString().padStart(2, '0');
    minutes.textContent = objTime.minutes.toString().padStart(2, '0');
    seconds.textContent = objTime.seconds.toString().padStart(2, '0');

    if (diff <= 0) {
      clearInterval(intervalId);
      inputEl.disabled = false;
    }
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
    inputEl.disabled = false;
  }, userSelectedDate - Date.now());
});