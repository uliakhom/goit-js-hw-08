import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
getFromLS();

function toSubmitForm(evt) {
  evt.preventDefault();
  const formData = new FormData(form);
  formData.forEach((key, value) => console.log(`${value} : ${key}`));
  form.reset();
  localStorage.removeItem('feedback-form-state');
}

function toChangeInput(evt) {
  let savedData = localStorage.getItem('feedback-form-state');
  savedData = savedData ? JSON.parse(savedData) : {};
  savedData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(savedData));
}

function getFromLS() {
  let savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    savedData = JSON.parse(savedData);
    Object.entries(savedData).forEach(([name, value]) => (form.elements[name].value = value));
  }
}

form.addEventListener('input', throttle(toChangeInput, 500));
form.addEventListener('submit', toSubmitForm);
