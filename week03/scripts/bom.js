const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || []

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList (input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();   
        };

    //     input.value = '';
        
    // } else {
    //     input.value = '';
    //     input.placeholder = "Please Enter a Chapter";
    });
function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter() {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}