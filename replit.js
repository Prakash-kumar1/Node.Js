function capitalize(input) {  
    var words = input.split(' ');  
    var CapitalizedWords = [];  
    words.forEach(element => {  
        CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
    });  
    // return CapitalizedWords.join(' ');  
    console.log (CapitalizedWords.join(' '));  
}  
capitalize("this is aircampus") ;

// function capitalize(input) {  
//     let CapitalizeWords = input[0].toUpperCase();  
//     for (var i = 1; i <= input.length - 1; i++) {  
//         let currentCharacter,  
//             previousCharacter = input[i - 1];  
//         if (previousCharacter && previousCharacter == ' ') {  
//             currentCharacter = input[i].toUpperCase();  
//         } else {  
//             currentCharacter = input[i];  
//         }  
//         CapitalizeWords = CapitalizeWords + currentCharacter;  
//         console.log (CapitalizedWords.join(' '));
//     }  
//     // return CapitalizeWords;  
// }  
// capitalize("this is aircampus") ;

