const scriptURL = 'https://script.google.com/macros/s/AKfycbyBzbFh5Zq0GuO1hJWSkn3E8koVeBzfmEiqZyrpF1m-xv7F3ebn8mECDnIb34OacgCv/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      alert("Message sent successfully!");
      form.reset();
    })
    .catch(error => {
      alert("Failed to send message.");
      console.error('Error!', error.message);
    });
});
