function submit() {
    const submit=document.querySelector('.input');
    const text=submit.value;
    if(text===''){
        alert('Please enter a Valid Email Address');
    }
    else{   
        alert('Thanks for login');
        submit.value='';
    }
}