let formData = {
  email: '',
  message: '',
};

const feedbackForm = document.querySelector('.feedback-form');
const feedbackEmail = feedbackForm.elements.email;
const feedbackMessage = feedbackForm.elements.message;
const feedbackLocalStorageKey = 'feedback-form-state';

const formDataInStorageString = localStorage.getItem(feedbackLocalStorageKey);
if (formDataInStorageString) {
  formData = JSON.parse(formDataInStorageString);
}

feedbackEmail.value = formData.email;
feedbackMessage.value = formData.message;

feedbackForm.addEventListener('input', e => {
  formData.email = feedbackEmail.value.trim();
  formData.message = feedbackMessage.value.trim();
  localStorage.setItem(feedbackLocalStorageKey, JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', e => {
  e.preventDefault();
  if (formData.email === '' || formData.message == '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(feedbackLocalStorageKey);
  formData = {
    email: '',
    message: '',
  };
  feedbackForm.reset();
});
