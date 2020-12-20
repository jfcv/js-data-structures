

class List{

    // método para crear e inicializar un objeto creado a partir de una clase
    constructor() {
        this._list = []; // the '._list' underscore method means it's a private property
        this._listSize = 0;
        this._listPosition = 0;
    }

    //methods

    add(value) {
        this._list[this._listSize++] = value;  // this._listSize first gets assigned & then gets increased
    }

    remove(value) {
        let foundAt = this.find(value); //O(n)

        if(foundAt === -1) {
            console.log(`Sorry it couldn't find '${value}' on the list`);
            return false;
        }

        this._list.splice(foundAt,1);
        --this._listSize; // this is call : postfix vs. prefix operation
    }

    find(value) {
        for (let i = 0; i < this._list.length; i++) { //O(n) time complexity : it must search the whole array
            if(this._list[i] == value) {
                return i;
            }
        }
        return -1; //when it returns -1 it means the value was not found
    }

    contains(value) {
        let foundAt = this.find(value); //O(n)

        if (foundAt === -1) {
            console.log(`it couldn't find '${value}' on the list`);
            return false;
        }

        console.log(`'${value}' found on the list!`);
    }

    insertAfter(insertAfter,value) {
        let foundAt = this.find(insertAfter); //O(n)

        if(foundAt === -1) {
            console.log(`it couldn't find '${insertAfter}' on the list, please insert a valid value`);
            return false;
        }

        this._list.splice(foundAt+1,0,value);
        ++this._listSize;
    }

    clear() {
        this._list = [];
        this._listSize = 0;
    }

    //CHALLENGE ! : implement those methods for this data structure

    first() {
        this._listPosition = 0;
        console.log(this._list[this._listPosition]);
    }
    
    last() {
        this._listPosition = this._list.length-1;
        console.log(this._list[this._listPosition]);
    }
    
    next() {
        if(this._listPosition + 1 > this._list.length-1) { // you must compare without modifying the iterative variable
            console.log(`inaccessible`);
        } else {
            console.log(this._list[++this._listPosition]);
        } 
    }

    prev() {
        if(this._listPosition - 1 < 0) { // you must compare without modifying the iterative variable
            console.log(`inaccessible`);
        } else {
            console.log(this._list[--this._listPosition]);
        }
    }

    displayElementNameOnPosition(position) {
        if (position <= this._list.length && position > 0) {
            this._listPosition = position-1;
            console.log(this._list[this._listPosition]);
        } else {
            console.log(`inaccessible`);
        }
    }
}

//Testing ZONE

let newList = new List; //objeto 'newList' creado a partir de la clase 'List()'

newList.add("The Verve");
newList.add("Star Girl");
newList.add("The Strain");
newList.add("The Strave");



console.log('---------------');

newList.first();
newList.prev();
newList.last();
newList.next();


console.log('---------------');

newList.first();
newList.next();
newList.next();
newList.last();
newList.prev();

console.log('---------------');

newList.displayElementNameOnPosition(1);
newList.next();
newList.displayElementNameOnPosition(4);
newList.prev();

newList.displayElementNameOnPosition(5);

/*
newList.add(2);

newList.remove(3); //tries to remove 3 but it won't because it doesn't belong
newList.remove(2); //removes 2

newList.insertAfter("Star Girl", "Azul");

console.log(newList); //prints the list

console.log(newList.find("The Strain")); //returns the value

newList.add(2);
newList.contains(2); //contains method
newList.contains("Star Girl");

newList.clear(); //empty the list

console.log(newList);

*/