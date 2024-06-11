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
        let allTestsCorrect = true;

        // Run the user function with the test cases
        item.testsQ6.forEach(testCase => {
            const result = userFunction(testCase.inputA, testCase.inputB);

            const isCorrect = JSON.stringify(result) === JSON.stringify(testCase.expected);

            const message = isCorrect ? 'Correct' : 'Incorrect';

            console.log(`${message}: ${result}`);

            const isIncorrect = !isCorrect;

            const resultDiv = document.querySelector('.descritionContainer_1');

            const lastTestCorrect = item.testsQ6[item.testsQ6.length - 1].expected;
            const allButLastIncorrect = item.testsQ6.slice(0, -1).every(testCase => JSON.stringify(testCase.expected) !== JSON.stringify(lastTestCorrect));


            

            if (isIncorrect) {
                resultDiv.classList.remove('correct');
                resultDiv.classList.add('incorrect');
              } else  {
                resultDiv.classList.remove('incorrect');
                resultDiv.classList.add('correct');
                
              }
              if (allButLastIncorrect && JSON.stringify(result) === JSON.stringify(lastTestCorrect)) {
                resultDiv.classList.remove('correct');
                resultDiv.classList.add('incorrect');
            }
            const resultElement = document.createElement('p');

            resultElement.classList.add('Outptut_text')

            resultElement.textContent = ` expected ${testCase.expected}; result : ${result} ; ${message}`;

            resultDiv.appendChild(resultElement);
            
            const existingButton = document.querySelector('.descritionContainer_1 button');

            if (existingButton) {
                existingButton.remove();
            }
            
            const resetButton = document.createElement('button');

            resetButton.classList.add('resetButton');

            resetButton.textContent = 'Reset Tests';
            
            const resetButtonContainer = document.querySelector('.descritionContainer_1');

            resetButtonContainer.appendChild(resetButton);
            
            resetButton.addEventListener('click', function() {
                resultDiv.innerHTML = '';
                resultDiv.classList.remove('correct');
                resultDiv.classList.remove('incorrect');
            });
        });
        
    });
    
    /*if (!resultDiv.querySelector('.modal')) {
                    resultDiv.classList.remove('incorrect');
                    resultDiv.classList.add('correct');
                    const modal = document.createElement('div');
                    modal.classList.add('modal');
            
                    const modalContent = document.createElement('div');
                    modalContent.classList.add('modal-content');
                    modalContent.innerHTML = `
                        <p>Kata :'${item.nameQ6}' Correct</p>
                    `;
                    modal.appendChild(modalContent);
                    resultDiv.appendChild(modal);
                }*/