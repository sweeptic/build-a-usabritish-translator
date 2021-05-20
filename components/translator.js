const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling');
const americanToBritishTitles = require('./american-to-british-titles');
const britishOnly = require('./british-only.js');
const { americanToBritish, britishToAmerican } = require('./languages');

class Translator {
  translate(text, locale) {
    let translation = text;
    const translatedWords = [];
    const noTranslateHappen = 'Everything looks good to me!';
    const invalidLocale = 'Invalid value for locale field';
    const fieldMissing = 'Required field(s) missing';
    const noText = 'No text to translate';

    if (text === '') return { error: noText };
    if (text === undefined || locale === undefined || locale === '') return { error: fieldMissing };
    if (locale !== americanToBritish && locale !== britishToAmerican) return { error: invalidLocale };

    const replaceTimeDelimiter = (translatedWords, translation, delimiter) => {
      let digitRegex = new RegExp(`\\d+${delimiter[0]}\\d+`, 'gi');
      return translation.replace(digitRegex, match => {
        const toReplace = match.replace(delimiter[0], delimiter[1]);
        translatedWords.push([toReplace]);
        return toReplace;
      });
    };

    const setTimeDelimiter = (translatedWords, translation, locale) => {
      translation =
        locale === americanToBritish
          ? replaceTimeDelimiter(translatedWords, translation, [':', '.'])
          : replaceTimeDelimiter(translatedWords, translation, ['.', ':']);
      return translation;
    };

    const setTranslatedText = (wordDictionary, translation, wordReplacer) => {
      Object.keys(wordDictionary).map(key => {
        let wordRegex = new RegExp(`(?<=\\s|^)\\b${key}\\b|(${key})`, 'gi');
        let match = wordRegex.exec(translation);
        while (match) {
          translation = translation.replace(match[0], wordReplacer);
          match = wordRegex.exec(translation);
        }
      });
      return translation;
    };

    const setClassToWord = (wordsToHighlighted, sentence, cssClass) => {
      wordsToHighlighted.forEach(word => {
        sentence = sentence.replace(word, `<span class="${cssClass}">${word}</span>`);
      });
      return sentence;
    };

    const getMinifiedDictionary = (dictionaries, sentence) => {
      sentence = sentence.replace(/[\.|\?|\!]$/, '');
      const minifiedDictionary = {};
      const sentenceArr = sentence.split(' ').map(a => a.toLowerCase());
      for (const dictionary of dictionaries) {
        for (const translation in dictionary) {
          Object.hasOwnProperty.call(dictionary, translation) &&
            sentenceArr.includes(translation.match(/^\S*/)[0]) &&
            (minifiedDictionary[translation] = dictionary[translation]);
        }
      }
      return minifiedDictionary;
    };

    const getInverseDictionary = dictionary => {
      return Object.keys(dictionary).reduce((acc, key) => {
        acc[dictionary[key]] = key;
        return acc;
      }, {});
    };

    const getDictionary = (locale, text) => {
      return locale === americanToBritish
        ? getMinifiedDictionary([americanOnly, americanToBritishSpelling, americanToBritishTitles], text)
        : getMinifiedDictionary(
            [britishOnly, getInverseDictionary(americanToBritishSpelling), getInverseDictionary(americanToBritishTitles)],
            text
          );
    };

    const wordReplacer = match => {
      let toReplace = wordDictionary[`${match.toLowerCase()}`];
      //Mr. -> Mr or vica versa
      if (/\.$/.test(toReplace) || /\.$/.test(match)) {
        toReplace = toReplace.charAt(0).toUpperCase() + toReplace.slice(1);
      }
      translatedWords.push([toReplace]);
      return toReplace;
    };

    //the functions required for operation are on top
    //functions must not be visible from the outside (unit closure principle)
    //
    //below are the steps required for the process

    /*******************GET DICTIONARY***************** */
    const wordDictionary = getDictionary(locale, text);

    /*******************TRANSLATE***************** */
    translation = setTranslatedText(wordDictionary, translation, wordReplacer);

    /***************SET TIME DELIMITER********************* */
    translation = setTimeDelimiter(translatedWords, translation, locale);

    /***************HIGHLIGHT WORDS********************* */
    const highlightedTranslation = setClassToWord(translatedWords, translation, 'highlight');

    return {
      text,
      //for unit testing purposes only
      translation: text === translation ? noTranslateHappen : translation,
      highlightedTranslation: text === translation ? noTranslateHappen : highlightedTranslation,
    };
  }
}

module.exports = Translator;
