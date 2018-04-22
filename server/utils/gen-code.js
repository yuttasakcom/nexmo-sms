module.exports = length => {
  let code = "";

  for (let i = 0; i < length; i++) {
    code += Math.floor(Math.random() * (9 - 0)) + 0;
  }

  return code.toString();
};
