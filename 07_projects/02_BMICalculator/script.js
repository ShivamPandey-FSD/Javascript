const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results')

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid height ${height}`
  } else {
    const bmi = (weight * ((height*height)/10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}</span><br /><p>Yor are Under Weight</p>`
    } else if (bmi > 24.9) {
      results.innerHTML = `<span>${bmi}</span><br /><p>Yor are over Weight</p>`
    } else {
      results.innerHTML = `<span>${bmi}</span><br /><p>Yor are Normal Weight</p>`
    }
  }
})
