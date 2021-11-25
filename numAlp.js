"use strict"

let button = document.getElementById('buttonClick');

button.addEventListener('click', () => {
    let userInput = parseInt(document.getElementById('inputStr').value);

    let resultOfSequence= {};

    let square = squarePattern(userInput, number(userInput), alphabet(userInput), fibonacci(userInput))
    console.log(square)

    // let numberShow = number(userInput)
    // console.log(numberShow)

    // let alphabetShow = alphabet(userInput)
    // console.log(alphabetShow)

    

    function fibonacci(n){
        let fibo = [0];
        let prev = 0;
        let next = 1;

        for (let i = 1; i < n; i++){
            let sum = next;
            next = prev + next;
            prev = sum;
            fibo.push(sum);
        }
        resultOfSequence.fibonacciSequence = fibo;
        return resultOfSequence;
    }



    function number(n){
        let num = [1];
        let initial = 1;

        for (let i = 0; i <= n/2; i++){
            initial = initial + 1;
            num.push(initial);
        }
        resultOfSequence.numberSequence = num;
        return resultOfSequence;
    }

    function alphabet(n){
        let alphabet = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
        ];
        let alpSeq = [];

        for (let i = 0; i <= n/2; i++){
            alpSeq.push(alphabet[i]);
        }
        resultOfSequence.alpSequence = alpSeq;
        return resultOfSequence;
    }


    function squarePattern(n, numSeq, alpSeq, fiboSeq){
        let square = [];
        let numAlp = [];
        let countNum = 0;
        let countAlp = 0;
 
        let numSequence = numSeq.numberSequence
        // console.log(numSequence)
        let alpSequence = alpSeq.alpSequence
        // console.log(alpSequence)
        let fiboSequence = fiboSeq.fibonacciSequence
        fiboSequence = fiboSequence.join(' ')
        let result=''

        for (let i = 0; i < n; i++){
            if (i % 2 == 0){
                numAlp.push(numSequence[countNum])
                countNum++
            }
            else{
                numAlp.push(alpSequence[countAlp])
                countAlp++
            }
            
            result = numAlp.join(' ')
            // console.log(result)
        }



        for (let i = 0; i < n; i++){
            if (i % 2 == 0){
                square.push(result)
            }
            else{
                square.push(fiboSequence)
            }
        }
        return 'n:' + n + '\n' + square.join('\n')
    }

})