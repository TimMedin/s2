const openFormBtn = document.getElementById('open-form-btn');
const openFormBtnTwo = document.getElementById('open-form-btn-two');
const formModal = document.getElementById('form-modal');
const overlay = document.getElementById('overlay');
const registrationForm = document.getElementById('registration-form');
const successModal = document.getElementById('success-modal');
const closeBtn = document.querySelector('.close-btn');

openFormBtn.addEventListener('click', function() {
  formModal.classList.add('show');
  overlay.classList.add('show');
});

openFormBtnTwo.addEventListener('click', function() {
  formModal.classList.add('show');
  overlay.classList.add('show');
});

 
closeBtn.addEventListener('click', function() {
  formModal.classList.remove('show');
  overlay.classList.remove('show');
});

registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Simulating registration success
  setTimeout(function() {
    formModal.classList.remove('show');
    overlay.classList.add('show');
    successModal.classList.add('show');
    setTimeout(function() {
      overlay.classList.remove('show');
      successModal.classList.remove('show');
    }, 2200);
  }, 1000);
});

// Отримати всі елементи з анімаціями
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

// const MODAL_ACTIVE_CLASS_NAME = 'modal-active';

// const formModal = document.querySelector('#form-modal');
// const successModal = document.querySelector('#success-modal');
// const form = document.querySelector('#form');

// const openFormModalBtn = document.querySelector('#open-form-modal-btn');
// const launchBtn = document.querySelector('#launch-btn');
// const closeBtns = document.querySelectorAll('.close-btn');

openFormBtn.addEventListener('click', () => {
  formModal.classList.add('show');
   overlay.classList.add('show');
})

const closeFormModal = () => {
    formModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};

const closeSuccessModal = () => {
    successModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};

const openSuccessModal = () => {
    successModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
};

closeBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        closeFormModal();
        closeSuccessModal();
    })
})

function clearFormFields() {
    const modalFiends = formModal.querySelectorAll('input');

    modalFiends.forEach( field => { 
        field.value = ''
    });
}

function showGooseAnim() {
    const targetContainer = document.querySelector('.modal-form');
    const gusImage = document.createElement('img');
    // gusImage.setAttribute('src', './img/gus-anim.gif');
    // gusImage.classList.add('gus-anim');

    targetContainer.appendChild(gusImage);

    setTimeout(1000, () => {
        targetContainer.removeChild(gusImage);
    })
}
    

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        showGooseAnim();

        setTimeout(() => {
            closeFormModal();
            setTimeout(openSuccessModal, 700);
            setTimeout(closeSuccessModal, 4000);
            clearFormFields();
        }, 2000);
      })
      .catch((error) => console.log('Sending form failed'));
})

