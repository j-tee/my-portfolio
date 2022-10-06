/* eslint-disable no-else-return */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-useless-escape */
/* eslint-disable linebreak-style */
const txtname = document.getElementById('name');
const txtmsg = document.getElementById('msg');
const txtmail = document.getElementById('mail');
const filter = /^[a-z]+\@[^\s]+\.[a-z]{2,4}$/;

const data = {
  name: '',
  mail: '',
  msg: '',
};

window.addEventListener('load', () => {
  // Retrive the JSON string
  const jstring = localStorage.getItem('data');
  // Parse the JSON string back to JS object using JSON
  const obj = JSON.parse(jstring);
  // Add input data to input fields
  txtname.value = obj.name;
  txtmail.value = obj.email;
  txtmsg.value = obj.comment;
});

// eslint-disable-next-line consistent-return
const myform = document.getElementById('contact-form');

myform.addEventListener('submit', (event) => {
  if (filter.test(txtmail.value)) {
    data.name = txtname.value;
    data.mail = txtmail.value;
    data.msg = txtmsg.value;
    localStorage.setItem('data', JSON.stringify(data));
    return true;
  }
  event.preventDefault();
  const errMsg = document.getElementById('err-msg');
  errMsg.innerHTML = 'Your email address is invalid!!';
  errMsg.classList.add('invalid');
  // eslint-disable-next-line no-unused-expressions
  txtmail.focus;
  return false;
});
