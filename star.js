"use strict"

let button = document.getElementById('buttonClick');

button.addEventListener('click', () => {
    let userInput = parseInt(document.getElementById('inputStr').value);
    let starSquare = starPattern(userInput)
    console.log(starSquare)

    function starPattern(n){
        let star = '';

        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                star += '*' + ' ';
                
            }
            star += '\n';
            console.log(star)
        }
        return "n:"+ n +'\n'+ star
    }

})