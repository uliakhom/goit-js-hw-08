import throttle from 'lodash.throttle';
const savedData = localStorage.getItem('feedback-form-state');
const form = document.querySelector('.feedback-form');

const data = {
  email: '',
  message: '',
};

const inputDataValue = function () {
  data.email = form.elements.email.value;
  data.message = form.elements.message.value;
};

form.addEventListener(
  'input',
  throttle(() => {
    inputDataValue();
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  }, 500),
);

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(data);
  form.reset();
  localStorage.clear();
});

if (savedData) {
  form[0].value = JSON.parse(savedData).email;
  form[1].value = JSON.parse(savedData).message;
}

inputDataValue();
