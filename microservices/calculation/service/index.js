module.exports = async (expression) => new Function(`return ${expression}`)();
