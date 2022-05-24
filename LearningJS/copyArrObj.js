'use strict';

 
    function copy(mainObj) {  // ПОВЕРХНОСТНАЯ КОПИЯ. ВЛОЖНННЫЕ СВОЙСТА ОБЪЕКТОВ НЕ СКОПИРУЮТСЯ, А БУДУТ ССЫЛКОЙ!
        let objCopy = {};
        let key;
        for (key in mainObj) {
            objCopy[key] = mainObj[key];
        }
        return objCopy;
    }

    const numbers = {
        a:2,
        b:5,
        c: {
            x:7,
            y:4
        }
    };

    const newNumbers = copy (numbers);
    newNumbers.a = 10;
    // console.log (newNumbers);
    // console.log (numbers);

    const add = {
        d:16,
        i:20
    };

    const clone = Object.assign({}, add);
    clone.d = 20;

    const oldArr = ['a', 'b', 'c'];
    const newArr = oldArr.slice();
    newArr[2] = 'massivVtoroy';

   const video = ['youtube', 'vimeo', 'rutube'],
         blogs = ['wordpress', 'lifejournal', 'blogger'],
        internet = [...video, ...blogs, 'vk', 'facebook'];

    console.log (internet);


    function log (a,b,c) {
        console.log (a);
        console.log (b);
        console.log (c);
    }

    const num = [2, 5, 7];
    log (...num);

    const array = ['a', 'b'];
    const newAaray = [...array];

    const q = {
        one: 1,
        two: 2
    };

    const newObj = {...q};