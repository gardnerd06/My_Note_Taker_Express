// created a function randomly generate a number

module.exports = () =>
    Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
