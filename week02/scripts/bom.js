const input = documetn.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value !== '') {
        const li = document.createElement('li'); 

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        
        li.textContent = input.value;
        li.appendChild(deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';
        
    } else {
        input.value = '';
        input.placeholder = "Please Enter a Chapter";
    }
});