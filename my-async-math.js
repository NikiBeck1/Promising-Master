let primaryVal = 6 + 2;

let doMath = (delay) => {
    console.log('Lets start with ' + primaryVal);
    
    
        setTimeout(() => {
        var multiVal = primaryVal * 2
        console.log('Multiplyed by 2 is ' + multiVal);
    
        setTimeout(() => {
        let divideVal = multiVal / 4;
        console.log('Divided by 4 is ' + divideVal);
    
        setTimeout(() => {
        let subtractVal = divideVal - 3;
        console.log('Subtracted by 3 is ' + subtractVal);
    
        setTimeout(() => {
        let addedVal = subtractVal + 98;
        console.log('Add 98 and get ' + addedVal);
        
        setTimeout(() => {
            let remainderVal = addedVal % 2;
            console.log('Divide that by 2 for the remainder of ' + remainderVal);
        
        setTimeout(() => {
            let multiAgainVal = remainderVal * 50;
            console.log('Multiply that by 50 for ' + multiAgainVal);
            
        setTimeout(() => {
            let remainderAgainVal = multiAgainVal % 40;
            console.log('Dividing that by 40 gives us the remainder of ' + remainderAgainVal);
             
        setTimeout(() => {
            let finalVal = remainderAgainVal + 32;
            console.log('Adding 32 gives us a final answer of ' + finalVal);
                    
    }, delay)

    }, delay)

    }, delay)

    }, delay)
    
    }, delay)

    }, delay)
    
    }, delay)
    
    }, delay)  
}


doMath(1000);