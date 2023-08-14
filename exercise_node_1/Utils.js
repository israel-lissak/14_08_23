import fs from 'fs';
import * as lodash from './lodashModule.js';
export function write(text) {
    fs.appendFile('./file_2.txt', text + '\n\n', (err) => {
        if (err) throw err;
    });
}

export function read() {
    fs.readFile('./file_1.txt','utf-8',function (err, data) {
        if (err) throw err;
        console.log(data);
        console.log(`file has ${data.split(' ').length} words in it`);
        const arr = data.split(' ');
        const reverseArr = lodash.reverse(arr);
        console.log(reverseArr.join(' '));
        const uniqArr = lodash.uniq(data.split(' '));
        console.log(uniqArr.join(' '));
        console.log(`uniq file has ${uniqArr.length} words in it`);
        console.log(uniqArr.join(' ').toUpperCase());
        write(uniqArr.join(' ').toUpperCase());
        const uniqArrBiggerThen5 = uniqArr.filter((word) => word.length > 5)
        console.log(uniqArrBiggerThen5.join(' '));
        write(uniqArrBiggerThen5.join(' '))
    })
}