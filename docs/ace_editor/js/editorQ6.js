// Retrieve Elements
const consoleLogList = document.querySelector('.editor__console-logs');
const executeCodeBtn = document.querySelector('.editor__run');
const resetCodeBtn = document.querySelector('.editor__reset');
var item = JSON.parse(localStorage.getItem('dataToPass6')); //заменить на нужную задачу
// Setup Ace
let codeEditor = ace.edit("editorCode");
let defaultCode = item.FuncNameQ6; // добавить имена функций в зависимости от задачи
let consoleMessages = [];

let editorLib = {
    clearConsoleScreen() {
        consoleMessages.length = 0;

        // Remove all elements in the log list
        while (consoleLogList.firstChild) {
            consoleLogList.removeChild(consoleLogList.firstChild);
        }
    },
    printToConsole() {
        consoleMessages.forEach(log => {
            const newLogItem = document.createElement('li');
            const newLogText = document.createElement('pre');

            newLogText.className = log.class;
            newLogText.textContent = `>${log.message}`;

            newLogItem.appendChild(newLogText);

            consoleLogList.appendChild(newLogItem);
        })
    },
    init() {
        // Configure Ace

        // Theme
        codeEditor.setTheme("ace/theme/ambiance");

        // Set language
        codeEditor.session.setMode("ace/mode/javascript");

        // Set Options
        codeEditor.setOptions({
            fontFamily: 'Inconsolata',
            fontSize: '12pt',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
        });

        // Set Default Code
        codeEditor.setValue(defaultCode);
    }
}

// Events
executeCodeBtn.addEventListener('click', () => {
    // Clear console messages
    editorLib.clearConsoleScreen();
    
    // Get input from the code editor
    const userCode = codeEditor.getValue();

    // Run the user code
    try {
        new Function(userCode)();
    } catch (err) {
        console.error(err);
    }

    // Print to the console
    editorLib.printToConsole();
});

resetCodeBtn.addEventListener('click', () => {
    // Clear ace editor
    codeEditor.setValue(defaultCode);

    // Clear console messages
    editorLib.clearConsoleScreen();
})

editorLib.init();
    //console.log(codeEditor.getValue()); беру значение из редактора
    
        const submitCodeBtn = document.querySelector('.editor__submit');

        submitCodeBtn.addEventListener('click', () => {
            const userCode = codeEditor.getValue();

            function removeFirstAndLastBrackets(input) {
                const firstBracketIndex = input.indexOf('{');
                const lastBracketIndex = input.lastIndexOf('}');
              
                if (firstBracketIndex !== -1 && lastBracketIndex !== -1) {
                  const newInput = input.slice(firstBracketIndex + 1, lastBracketIndex);
                  return(newInput);
                } else {
                  console.log('No brackets found');
                }
              }

            const userFunction = new Function([item.FuncArgsQ6], removeFirstAndLastBrackets(userCode));
            console.log(userFunction);    


        // Example test cases
        item.testsQ6
    
        // Run the user function with the test cases
        item.testsQ6.forEach(testCase => {
            const result = userFunction(testCase.inputA, testCase.inputB);
            const isCorrect = result === testCase.expected;
            const message = isCorrect ? 'Correct' : 'Incorrect';
            console.log(`${message}: ${result}`);
            const resultElement = document.createElement('p');
            resultElement.textContent = ` expected ${testCase.expected}; result : ${result} ; ${message}`;
            consoleLogList.appendChild(resultElement);
        });
    });
    