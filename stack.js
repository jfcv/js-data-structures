
class Stack {

    constructor() {
        this._stackStorage = {};
        this._stackLength = 0;
    }

    // push a value to the end of the stack
    push(value) {
        if(!value) {                                   // validation check example
            console.log('Please provide a value');
            return false;
        }
        this._stackStorage[this._stackLength++] = value;
    }

    // remove a value from the end of the stack
    pop() {
        if(this.isEmpty()) {
            console.log(`The Stack is empty.`);
            return false;
        }
        this._stackLength--;
        delete this._stackStorage[this._stackLength];
    }

    // return a value to the end of the stack without removing it
    peek() {
        if(this.isEmpty()) {
            console.log(`The Stack is empty.`);
            return false;
        }
        console.log(`Last Stack Value: ${this._stackStorage[this._stackLength-1]}`);
    }

    // clear the stack
    clear() {
        this._stackStorage = {};
        this._stackLength = 0;
    }

    // return TRUE if stack is empty
    isEmpty() {
        return this._stackLength === 0;
    }

    // return the size of the stack
    size() {
        return this._stackLength;
    }

}

let myStack = new Stack;

myStack.push('The Finisito of Marihuana');
myStack.push('Un plon');

console.log(myStack);
console.log(myStack.size());
myStack.push(); //empty value case !
console.log(myStack.isEmpty());

myStack.pop();
myStack.pop();
console.log(myStack.isEmpty());
myStack.pop(); //stack empty case


myStack.push('The Finisito of Marihuana');
myStack.push('Un plon');

myStack.peek(); //printing last value

myStack.clear();
console.log(myStack);