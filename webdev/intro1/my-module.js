module.exports = function (msg) {

  return msg.replace(/[aeiou]{2,}/, 'oo').toUpperCase()

}
