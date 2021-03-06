"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'max', hobbies: ['sports'] }, { age: 30 });
console.log(mergeObj);
function countAndDescribe(element) {
    let descriptionText = 'got no value.';
    if (element.length === 1) {
        descriptionText = 'got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = 'got' + element.length + 'elements.';
    }
    return [element, descriptionText];
}
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('max');
textStorage.addItem('manu');
textStorage.removeItem('max');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
