/************************************/
//         STANDARD I/O JS          //
/************************************/
// Date: 15/05/21
// Description: Here I demonstrate
//              how to print messages
//              to the console and
//              read input data from
//              the CLI

// Printing with console
console.log(process.argv[0])
// Printing with process
process.stdout.write(process.argv[0] + '\n')

// Reading with process.stdin
// Filling some data in terminal
// Define questions arrar
let questions = [
    'What\'s your name?',
    'How old are you?',
    'Favourite sport?'
];
// Define answers array
let answers = [];
// Create index for reading
process.stdout.write(`0. ${questions[0]} `);
process.stdin.resume();
process.stdin.on('data',function(data){
    if (answers.length < questions.length){
        answers.push(String(data).trim());
        if(questions[answers.length] !== undefined){
            process.stdout.write(`${answers.length}. ${questions[answers.length]} `);
        }
    } else{
        console.log('Thanks for your time!');
        console.log(answers);
        console.log(answers.length)
        process.exit();
    }
});