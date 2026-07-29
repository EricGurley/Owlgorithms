export const practiceProblems = {
    'celestial-sphere': [
        {
            id: 'cs-q1',
            type: 'numerical',
            generate: () => {
                const x = Math.floor(Math.random() * 50) + 10; 
                const y = Math.floor(Math.random() * 10) + 1;  
                const expectedAnswer = x - y;
                return {
                    prompt: `Calculate the following difference: ${x} - ${y} = ?`,
                    correctAnswer: expectedAnswer,
                    solution: `Step 1: Identify your variables. x = ${x} and y = ${y}. \nStep 2: Subtract ${y} from ${x}. \nFinal Answer: ${expectedAnswer}`
                };
            }
        },
        {
            id: 'cs-q2',
            type: 'numerical',
            generate: () => {
                const x = Math.floor(Math.random() * 20) + 5; 
                const y = Math.floor(Math.random() * 15) + 5;  
                const expectedAnswer = x + y;
                return {
                    prompt: `Calculate the sum: ${x} + ${y} = ?`,
                    correctAnswer: expectedAnswer,
                    solution: `Step 1: Add the values together: ${x} + ${y}. \nFinal Answer: ${expectedAnswer}`
                };
            }
        }
    ],
    'order-of-planets': [
        {
            id: 'op-q1',
            type: 'numerical',
            generate: () => {
                const x = Math.floor(Math.random() * 12) + 2; 
                const y = Math.floor(Math.random() * 12) + 2;  
                const expectedAnswer = x * y;
                return {
                    prompt: `Calculate the product: ${x} * ${y} = ?`,
                    correctAnswer: expectedAnswer,
                    solution: `Step 1: Multiply the values: ${x} * ${y}. \nFinal Answer: ${expectedAnswer}`
                };
            }
        },
        {
            id: 'op-q2',
            type: 'numerical',
            generate: () => {
                const divisor = Math.floor(Math.random() * 10) + 2; 
                const answer = Math.floor(Math.random() * 12) + 2;
                const dividend = divisor * answer; 
                return {
                    prompt: `Calculate the quotient: ${dividend} / ${divisor} = ?`,
                    correctAnswer: answer,
                    solution: `Step 1: Divide ${dividend} by ${divisor}. \nFinal Answer: ${answer}`
                };
            }
        }
    ],
    'right-ascension': [
        {
            id: 'ra-q1',
            type: 'numerical',
            generate: () => {
                const x = Math.floor(Math.random() * 10) + 1; 
                const y = Math.floor(Math.random() * 10) + 1;
                const z = Math.floor(Math.random() * 5) + 1;
                const expectedAnswer = x + y - z;
                return {
                    prompt: `Calculate the result: ${x} + ${y} - ${z} = ?`,
                    correctAnswer: expectedAnswer,
                    solution: `Step 1: Add the first two values: ${x} + ${y} = ${x+y}. \nStep 2: Subtract the third value: ${x+y} - ${z}. \nFinal Answer: ${expectedAnswer}`
                };
            }
        },
        {
            id: 'ra-q2',
            type: 'numerical',
            generate: () => {
                const x = Math.floor(Math.random() * 20) + 10; 
                const y = Math.floor(Math.random() * 10) + 5;  
                const expectedAnswer = x + y;
                return {
                    prompt: `Calculate the sum: ${x} + ${y} = ?`,
                    correctAnswer: expectedAnswer,
                    solution: `Step 1: Add the values together: ${x} + ${y}. \nFinal Answer: ${expectedAnswer}`
                };
            }
        }
    ]
};