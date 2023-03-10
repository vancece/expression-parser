const babel = require('@babel/core');
const type = require('@babel/types');

module.exports = function transformToNormalJson(expressionString, hingeKey) {
    const prefix = `var expression = `
    const completedProgramString = `${prefix}${expressionString}`;

    const visitor = {
        visitor: {
            StringLiteral: {
                // 我根据关键词专门捕捉表达式
                enter(path) {
                    // 判断是否是表达式
                    if (hingeKey.includes(path.node.value)) {
                        const parentPath = path.parentPath;
                        const { start, end } = parentPath.node.value;
                        // 如何判断，要么是 string 要么是 boolean 要么是 number 要么是表达式，如果不是表达式，溜了
                        if (type.isStringLiteral(parentPath.node.value) || type.isBooleanLiteral(parentPath.node.value) || type.isNumericLiteral(parentPath.node.value)) {
                            return;
                        }
                        // 捉住表达式，加个标记，标记随便起
                        parentPath.replaceWith(type.objectProperty(type.stringLiteral(path.node.value), type.stringLiteral(`%%%${parentPath.hub.getCode().slice(start, end)}%%%`)));
                        parentPath.skip();
                    }
                }
            }
        }
    }
    const transformRes = babel.transform(completedProgramString, {plugins: [visitor]});
    const clearedCode = transformRes.code.replace(prefix, '').replace("};", '}');
    return JSON.parse(clearedCode);
}