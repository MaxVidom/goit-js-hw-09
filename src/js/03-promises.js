const refs = {
  form: document.querySelector(".form")
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
   return promise;
};

refs.form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const amount = Number(refs.form.amount.value);
  const delayStep = Number(refs.form.step.value)
  let delay = Number(refs.form.delay.value);
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delay += delayStep;
  }
})


