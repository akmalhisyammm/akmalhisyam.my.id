/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
  },
  localePath:
    typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
};
