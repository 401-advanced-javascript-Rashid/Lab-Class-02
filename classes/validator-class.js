'use strict';

let num = 1;
let arr = ['a'];
let str = 'yes';
let obj = {x:'y'};
let func = () => {};
let bool = false;

class validator {
    constructor(num, arr, obj, str, func, bool) {
        this.num = num;
        this.arr = arr;
        this.obj = obj;
        this.str = str;
        this.func = func;
        this.bool = bool;
    }
    isString(input) {
        return typeof input === 'string';
    }
    isNumber(input) {
        return typeof input === 'number';
    }
    isArray(input) {
        return Array.isArray( input );
    }
    isObject(input) {
        return typeof input === 'object';
    }
    isBooleans(input) {
        return typeof input === 'boolean';
    }
    isfunctions(input) {
        return typeof input === 'function'
    }
}
var classes = new validator (str , num , arr ,obj , func , bool)

module.exports = classes;
  