/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-useless-escape */
/* eslint-disable linebreak-style */
const mail = document.getElementById('mail');
const filter = /^[a-z]+\@[^\s]+\.[a-z]{2,4}$/;

// eslint-disable-next-line consistent-return
const myform = document.getElementById('contact-form');

myform.addEventListener('submit', (event) => {
  if (!filter.test(mail.value)) {
    event.preventDefault();
    const errMsg = document.getElementById('err-msg');
    errMsg.innerHTML = 'Your email address is invalid!!';
    errMsg.classList.add('invalid');
    // eslint-disable-next-line no-unused-expressions
    mail.focus;
    return false;
  }
  return true;
});
