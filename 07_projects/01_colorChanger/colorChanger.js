const colorButtons = document.querySelectorAll('.button');
const htmlBody = document.querySelector('body');

colorButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.target.id === 'grey') {
      htmlBody.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      htmlBody.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      htmlBody.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      htmlBody.style.backgroundColor = e.target.id;
    }
  })
})
