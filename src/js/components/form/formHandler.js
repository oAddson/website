const form = document.querySelector('.form');
const formGroups = form.querySelectorAll('.form_group');
const inputs = {  };
let count = 0;


form.addEventListener('submit', e => {
    e.preventDefault();

    const options = {
        method: "POST",
        body: JSON.stringify(inputs)
    }
    fetch('', options)
        .then(res => res.json)
        .then(data => console.log(data))
})

const listenIn = e => {
    e.target.parentElement.classList.add('-selected');
    e.target.addEventListener('focusout', listenOut);
    if(e.target.required && !e.target.value) {
        count--;
    }
}

const listenOut = e => {
    const {classList} = e.target.parentElement;
    const submitButton = form.querySelector('input[type=submit]');
    if(!e.target.validity.valid) {
        invalid(e)
        classList.remove('-valid');
        e.target.removeEventListener('focusout', listenOut)
        e.target.removeEventListener('keypressed', controlInputs)
        if(e.target.required) {
            count++;
            classList.add('-invalid');
        }
    } else {
        classList.remove('-invalid');
        classList.add('-valid');
        e.target.parentElement.querySelector('.form_group-message').innerText = '';
    }
    if(count > 1) {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}

const controlInputs = e => {
    inputs[e.target.id] = e.target.value;
    e.target.parentElement.classList.remove('-required');
}

formGroups.forEach(group => {
    const input = group.querySelector('.form_input')
    if(input !== null) {
        input.addEventListener('keyup', controlInputs)
        input.addEventListener('focusin', listenIn)
        count++;
    }
})

const invalid = e => {
    const {validity} = e.target;
    const errorMessage = e.target.parentElement.querySelector('.form_group-message');
    if(validity.valueMissing) {
        errorMessage.innerText = 'Não pode ser vazio';
        e.target.parentElement.classList.remove('-selected');
    }
    if(validity.typeMismatch && e.target.type === "email") {
        errorMessage.innerText = 'E-mail não é valido';
    }
}

export default { form, formGroups };