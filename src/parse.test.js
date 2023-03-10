const transformToNormalJson = require('./parse');
const path = require('path');
const fs = require('fs');
const expressions = require('./input');

test('parse expression', () => {
    const resultRecord = [];
    const hingeKey = ['$eq'];
    expressions.forEach((expression) => {
        resultRecord.push(transformToNormalJson(expression, hingeKey));
    });
    fs.writeFile(path.join(__dirname, './output.json'), JSON.stringify(resultRecord, null, '  '), () => null);
});