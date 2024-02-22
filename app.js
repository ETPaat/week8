const userInputBox = document.querySelector('#userInput');
const numberOfPrintsBox = document.querySelector('#numberOfPrints');
const btnPrint = document.querySelector('button');
const resutlList = document.querySelector('#resultPrints');

btnPrint.addEventListener('click', () => {
    resutlList.innerHTML = '';
    const userInputText = userInputBox.value; 
    const n = numberOfPrintsBox.value;

    for(let i = 0; i < n; i++) {


        let newLi = document.createElement('li');
        newLi.innerText = userInputText;
        resutlList.appendChild(newLi);

    }

})