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
    if(!e.target.value) {
        e.target.parentElement.classList.remove('-selected');
        e.target.removeEventListener('focusout', listenOut)
        e.target.removeEventListener('keypressed', controlInputs)
        if(e.target.required) {
            count++;
            e.target.parentElement.classList.add('-required');
        }
    }
    if(count > 1) {
        form.querySelector('input[type=submit]').disabled = true;
    } else {
        form.querySelector('input[type=submit]').disabled = false;
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



export default { form, formGroups };