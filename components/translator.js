const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling');
const americanToBritishTitles = require('./american-to-british-titles');
const britishOnly = require('./british-only.js');

class Translator {
  translate(text, locale) {
    return { text: '', translation: '' };
  }
}

module.exports = Translator;
