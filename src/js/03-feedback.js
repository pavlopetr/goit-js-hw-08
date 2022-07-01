import throttle from 'lodash.throttle';

const formFedEl = document.querySelector('.feedback-form');

const KEY_FORM = 'feedback-form-state';

let formData = {};

const populateForm = () => {
  const savedMessage = localStorage.getItem(KEY_FORM);
  formData = JSON.parse(savedMessage) ?? {};
  const formDataKeys = Object.keys(formData);

  if (savedMessage) {
    formDataKeys.map(key => {
      formFedEl.elements[key].value = formData[key];
    });
  }
};

const formInput = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(KEY_FORM, JSON.stringify(formData));
};

const formSubmit = e => {
  e.preventDefault();
  localStorage.removeItem(KEY_FORM);
 
  console.log(formData);

  e.target.reset();
};

populateForm();
formFedEl.addEventListener('input', throttle(formInput, 500));
formFedEl.addEventListener('submit', formSubmit);
