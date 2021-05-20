'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  const translator = new Translator();

  app.route('/api/translate').post((req, res) => {
    const { error, text, highlightedTranslation } = translator.translate(req.body.text, req.body.locale);

    res.json(
      error
        ? { error }
        : {
            text,
            translation: highlightedTranslation,
          }
    );
  });
};
