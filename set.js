
class Set {
    constructor() {
        this._setStorage = [];
    }

    //add a member to the set
    add(value) {

        if(!value) {
            console.error(`Please provide a value`);
            return false;
        }

        if(this._setStorage.lastIndexOf(value) !== -1) {
            console.log(`${value} is already on the Set!`);
            return false;
        }

        this._setStorage.push(value);
    }

    //removes a member from the set
    remove(value) {
        const index = this._setStorage.lastIndexOf(value);

        if(index === -1) {
            console.log(`the value ${value} is NOT on the Set!`);
            return false;
        }

        this._setStorage.splice(index,1);
    }
    
    //return the size of the set
    size() {
        console.log(this._setStorage.length);
        return true;
    }

    //return true if element is contained
    contains(value) {
        
        if(!value) {
            return `Please provide a value`;
        }

        return this._setStorage.lastIndexOf(value) !== -1;
    }

    //return all set members
    show() {
        console.log(this._setStorage);
        return true;
    }

    //return list of unique members in both sets
    unionSet(set) {

        let unionSet = [...this._setStorage];

        let obj = {};
        this._setStorage.forEach(element => { //O(n)
            obj[element] = true;
        })

        set.forEach(element => { //O(n)
            if(!obj[element]) {
                unionSet.push(element);
            }
        })

        return unionSet;

    }

    //return new list of mutual members in both sets
    intersectSet(set) {
        let intersectSet = [];

        let obj = {};
        this._setStorage.forEach(element => { //O(n)
            obj[element] = true;
        })

        set.forEach(element => { //O(n)
            if(obj[element]) {
                intersectSet.push(element);
            }
        })

        intersectSet = this.unionSet(intersectSet);

        return intersectSet;
    }

    //return new list of set A members that aren't present in the set B
    differenceSet(set) {

        let differenceSet = [];

        let obj = {};
        this._setStorage.forEach(element => { //O(n)
            obj[element] = true;
        })

        set.forEach(element => { //O(n)
            if(!obj[element]) {
                differenceSet.push(element);
            }
        })

        return differenceSet;

    }

}

let mySet = new Set;

mySet.add(1);
mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add(3);

console.log(mySet);

mySet.add();

mySet.remove(2);
mySet.remove(4);

console.log(mySet);

console.log('-------------');

mySet.size();

console.log('-------------');

console.log(mySet.contains());
console.log(mySet.contains(5));
console.log(mySet.contains(1));
console.log(mySet.contains(3));

console.log('-------------');

mySet.show();

console.log('-------------');

console.log(mySet.unionSet([1,2,4,3,5]));

console.log('-------------');

console.log(mySet.intersectSet([1,2,4,3,1,3]));

console.log('-------------');

console.log(mySet.differenceSet([1,2,4,3,5]));