const NextI18Next = require('next-i18next');

const options = {
  browserLanguageDetection: true,
  otherLanguages: ["fr"]
};

module.exports = new NextI18Next(options);
