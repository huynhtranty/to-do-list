const inputBox = document.getElementById('input-box');
const listTasks = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert('Please enter a task');
    } else {
        let li = document.createElement('li');
        li.textContent = inputBox.value;
        listTasks.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        saveData();
    }
    inputBox.value = '';
}

listTasks.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData(); 
    }
},false);

function saveData() {
    localStorage.setItem('data', listTasks.innerHTML);
}

function loadData() {
    listTasks.innerHTML = localStorage.getItem('data');
}

loadData();