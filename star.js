"use strict"

let button = document.getElementById('buttonClick');

button.addEventListener('click', () => {
    let userInput = parseInt(document.getElementById('inputStr').value);
    
    
    

    let resultOfSequence= {};
    // let starSquare = starPattern(userInput, fibonacci(userInput), odd(userInput))
    // console.log(starSquare)

    let square = squarePattern(userInput, fibonacci(userInput), odd(userInput))
    console.log(square)

    // let fiboSeq = fibonacci(userInput)
    // let oddSequ = odd(userInput)
    
    

    // console.log(fiboSeq)
    // console.log(oddSequ)



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


    function odd(n){
        let oddSeq = [1];
        let initial = 1;

        for (let i = 1; i<n; i++){
            initial = initial + 2;
            oddSeq.push(initial)
        }
        resultOfSequence.oddSequence = oddSeq;
        return resultOfSequence;
    }


    function squarePattern(n, fiboSeq, oddSeq){
        let square = [];
        let fiboSequence = fiboSeq.fibonacciSequence
        fiboSequence = fiboSequence.join(' ')
        let oddSequence = oddSeq.oddSequence
        oddSequence = oddSequence.join(' ')

        for (let i = 0; i < n; i++){
            if (i % 2 == 0){
                square.push(fiboSequence)
            }
            else{
                square.push(oddSequence)
            }
        }
        return 'n:' + n + '\n' + square.join('\n')
    }


      // function starPattern(n, fiboSeq, oddSeq){
    //     let star = [];
    //     let count = 0;
    //     let countNum = 0;

    //     for(let i = 0; i < n; i++){
    //         star += oddSeq.oddSequence[countNum]
    //         countNum++
    //         for(let j = 0; j < n; j++){
    //             star += fiboSeq.fibonacciSequence[count];
    //             count++
    //         }
    //         star += '\n';
    //         // console.log(star)
    //     }
    //     return "n:"+ n +'\n'+ star
    // }

})