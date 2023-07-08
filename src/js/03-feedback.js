import throttle from 'lodash.throttle';


const feedBackForm = document.querySelector('.feedback-form');
const emailInput = feedBackForm.querySelector('input[name="email"]');
const messageInput = feedBackForm.querySelector('textarea[name="message"]');

const handlerSaveForm = throttle(() => {
      const formState = {
        email: emailInput.value,
        message: messageInput.value
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(formState));
    }, 500);

emailInput.addEventListener('input', handlerSaveForm);
messageInput.addEventListener('input',handlerSaveForm);

function addFormFields() {
  const savedFormState = localStorage.getItem('feedback-form-state');
  if (savedFormState) {
    const formState = JSON.parse(savedFormState);
    emailInput.value = formState.email || '';
    messageInput.value = formState.message || '';
  }
}

addFormFields();

feedBackForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formState = {
    email: emailInput.value,
    message: messageInput.value
  };

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';

  console.log(formState);
});
  