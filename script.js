function submit(input) {
    
    let value = input.value;
    let gmail = '@' + value.split('@')[1];
    if (value === '') {
        alert('Enter a valid Email address');
        input.value = '';
    }
    else if (gmail === '@gmail.com') {
        alert('Thanks for login');
        input.value = '';
    }
    else {
        alert('Please Enter valid google email address');
        input.value = '';
    }
}

document.querySelectorAll('.red-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const inputs = document.querySelectorAll('.input');
        let data = inputs[index];
        submit(data);
    });
});
document.querySelectorAll('.input').forEach((input) => {
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            submit(input);
        }
    })
})
