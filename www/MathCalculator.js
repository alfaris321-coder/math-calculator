var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'MathCalculator', 'coolMethod', [arg0]);
};

exports.add = function (arg0, success, error) {
    exec(success, error, 'MathCalculator', 'add', [arg0]);
};

exports.multiply = function (arg0, success, error) {
    exec(success, error, 'MathCalculator', 'multiply', [arg0]);
};

exports.substract = function (arg0, success, error) {
    exec(success, error, 'MathCalculator', 'substract', [arg0]);
};

exports.divide = function (arg0, success, error) {
    exec(success, error, 'MathCalculator', 'divide', [arg0]);
};