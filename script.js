document.querySelectorAll('.red-btn').forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
    const inputs=document.querySelectorAll('.input');
    const data=inputs[index];

    let value=data.value;
    let gmail='@'+value.split('@')[1];
    if(value===''){
        alert('Enter a valid Email address');
        data.value='';
    }
    else if(gmail==='@gmail.com'){
        alert('Thanks for login');
        data.value='';
    }
    else{
        alert('Please Enter valid google email address');
        data.value='';
    }
})
})