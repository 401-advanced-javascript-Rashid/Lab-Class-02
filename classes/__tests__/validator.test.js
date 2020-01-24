'use strict';

const classes = require('../validator-class.js');

describe('validator module performs basic validation of', () => {

  it('strings', () => {
    let num = 1;
    let arr = ['a'];
    let str = 'yes';
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    var array = [num, arr, obj, str, func, bool];
    for (let i = 0; i < array.length; i++) {
      if ( array[i] === 'yes' ) {
        expect(classes.isString(array[i])).toBeTruthy();
        } else if (array[i] !== 'yes') {
          expect(classes.isString(array[i])).toBeFalsy();
        }  
    }
  });


  it('numbers', () => {
    let num = 1;
    expect(classes.isNumber(num)).toBeTruthy();
  });


  it('arrays', () => {
    let arr = ['a'];
    expect(classes.isArray(arr)).toBeTruthy();
  });


  it('objects', () => {
    let obj = {x:'y'};
    expect(classes.isObject(obj)).toBeTruthy();
  });


  it('booleans', () => {
    let bool = false;
    expect(classes.isBooleans(bool)).toBeTruthy();
  });


  it('functions', () => {
    let func = () => {};
    expect(classes.isfunctions(func)).toBeTruthy();
  });


});

describe('validator module performs complex validations', () => {

  let object = {
    Company : 'Capcom',
    heros : { DMC : 'Dante' , RE : 'Leon' },
    gamesNum : 2 ,
    bigCompany : true ,
    games : [ 'Devil May Cry ', 'Resident Evil' ] 
  };


  it('validates the presence of required object properties at any level', () => {
    expect(classes.isString(object.top10 ? object.top10:false)).toBeFalsy();
  });


  it('validates the proper types of object properties', () => {
    expect(classes.isNumber(object.gamesNum)).toBeTruthy();
  });


  it('validates the types of values contained in an array', () => {
    expect(classes.isArray(object.games)).toBeTruthy();
  });


  it('validates a value array against an approved list', () => {
    expect(classes.isBooleans(object.bigCompany)).toBeTruthy();
  });


  it('validates an object containing a value', () =>{
    expect(classes.isObject(object.heros)).toBeTruthy(); 
  });

})

