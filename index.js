const myForm = document.querySelector('.form-inline');
const taskInput = document.querySelector('.form-control');
const taskList = document.querySelector('#tasks');
const msg = document.querySelector('.msg');

console.log(taskList);

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    
    if(taskInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter you task';   
        msg.style.color = 'red';     
        // two parameters first, function second  time in mm
        setTimeout(() => msg.remove(), 3000);

    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${taskInput.value}`));
        li.className = 'list-group-item';
        li.style.color = 'coral';

        taskList.appendChild(li);
        
        //Clear fields
        taskInput.value = '';
    }

    //console.log(nameInput.value);
}

