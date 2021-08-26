const greetModule = require('bindings')('greet');

module.exports = {
    greet: greetModule.greet
}