import { currencyLocation } from 'utils';

const numberFormat = (type, num, locale) => {
  const loc = locale ? locale : 'en-CA';
  const curLoc = currencyLocation(locale);

  switch (type) {
    case 'cur-display':
      return new Intl.NumberFormat(loc, {
        style: 'currency',
        currency: curLoc,
      }).format(num);

    case 'cur-store':
      return new Intl.NumberFormat(loc, {
        style: 'decimal',
        useGrouping: false,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(num);
    default:
      return num;
  }
};
export { numberFormat };
