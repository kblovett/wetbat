const currencyLocation = (locale) => {
  switch (locale) {
    case 'en-US':
      return 'USD';
    case 'ja-JP':
      return 'JPY';

    default:
      return 'CAD';
  }
};

export { currencyLocation };
