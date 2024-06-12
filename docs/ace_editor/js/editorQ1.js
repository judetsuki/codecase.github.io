// Retrieve Elements
const consoleLogList = document.querySelector('.editor__console-logs');
const executeCodeBtn = document.querySelector('.editor__run');
const resetCodeBtn = document.querySelector('.editor__reset');
var item = JSON.parse(localStorage.getItem('dataToPass1')); //заменить на нужную задачу
// Setup Ace
let codeEditor = ace.edit("editorCode");
let defaultCode = item.FuncNameQ1; // добавить имена функций в зависимости от задачи
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

            const userFunction = new Function([item.FuncArgsQ1], removeFirstAndLastBrackets(userCode));
            console.log(userFunction);    


        // Example test cases
        item.testsQ1
        let correctCount = 0;

        // Run the user function with the test cases
        item.testsQ1.forEach(testCase => {
            const result = userFunction(testCase.inputA, testCase.inputB);

            const isCorrect = JSON.stringify(result) === JSON.stringify(testCase.expected);

            const message = isCorrect ? 'Correct' : 'Incorrect';

            console.log(`${message}: ${result}`);


            const resultDiv = document.querySelector('.descritionContainer_1');
            if (isCorrect) {
                correctCount++;
            }
            if (correctCount === 3) {
                resultDiv.classList.remove('incorrect');
                resultDiv.classList.add('correct');
                const modal = document.getElementById('modal');
                modal.style.display = 'block';
                const closeButton = document.getElementById('close_modal');
                closeButton.addEventListener('click', () => {
                const modal = document.getElementById('modal');
                modal.style.display = 'none';
                
            });
            } else {
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
    
    