// Retrieve Elements
const consoleLogList = document.querySelector('.editor__console-logs');
const executeCodeBtn = document.querySelector('.editor__run');
const resetCodeBtn = document.querySelector('.editor__reset');

// Setup Ace
let codeEditor = ace.edit("editorCode");
let defaultCode = 'console.log("Hello World!")';
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
        codeEditor.setTheme("ace/theme/dreamweaver");

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
        const userFunction = new Function('a', 'b', userCode);
        console.log(userFunction);    
        // Example test cases
        const testCases = [
            { inputA: 3, inputB: 5, expected: 15 },
            { inputA: 3, inputB: 0, expected: 0 },
            { inputA: -2, inputB: 5, expected: -10 },
            { inputA: 3.14, inputB: 2.71, expected: 9.4384 }
        ];
    
        // Run the user function with the test cases
        testCases.forEach(testCase => {
            const result = userFunction(testCase.inputA, testCase.inputB);
            const isCorrect = result === testCase.expected;
            const message = isCorrect ? 'Правильно' : 'Неправильно';
            console.log(`${message}: ${result}`);
        });
    });
    















    /*const submitCodeBtn = document.querySelector('.editor__submit');

    function compareCode(userCode, testCases) {
        for (const testCase of testCases) {
            const result = userCode.call(null, testCase.inputA, testCase.inputB);
            if (result !== testCase.expected) {
                displayResult(`Неправильно: ожидалось ${testCase.expected}, получено ${result}`);
                return false;
            }
        }
        displayResult('Правильно');
        return true;
    }

function displayResult(result) {
    const resultElement = document.createElement('p');
    resultElement.textContent = result;
    consoleLogList.appendChild(resultElement);
    console.log(result);
}

submitCodeBtn.addEventListener('click', () => {
    const userCodeString = codeEditor.getValue();
    const userCode = new Function('a', 'b', userCodeString);

    const testCases = [
        { inputA: 2, inputB: 3, expected: 6 },
        { inputA: -1, inputB: 5, expected: -5 },
        { inputA: 0, inputB: 0, expected: 0 }
    ];
    const isCorrect = compareCode(userCode, testCases);
    const message = isCorrect ? 'Правильно' : 'Неправильно';
    displayResult(message);
    console.log(userCodeString);
}); */