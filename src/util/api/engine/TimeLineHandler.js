/* eslint-disable no-loop-func */
const aMonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const isInCurrentMoth = (sDate, iMonth, iYear) => {
  return sDate.startsWith(iMonth.toString()) && sDate.endsWith(iYear.toString());
};

const getMonth = (sDate) => {
  return parseInt(sDate.substr(sDate, sDate.indexOf('/')), 10);
};

const parseTimeLine = async (measure) => {
  var aDates = Object.getOwnPropertyNames(measure),
    aTimeLine = [],
    iYear = new Date().getFullYear() % 100,
    iLastMonth = getMonth(aDates[aDates.length - 1]);

  var i = 0,
    year = 20;

  for (i = 1, year = 20; year <= iYear; i++) {
    if (i === iLastMonth + 1 && year === iYear) break;

    var aMonths = aDates.filter((sDate) => {
      return isInCurrentMoth(sDate, i, year);
    });

    var aMeasures = aMonths.map((sDay) => measure[sDay]);

    var iMeasure = aMeasures.reduce((totalMeasures, measures) => {
      return totalMeasures + measures;
    }, 0);

    aTimeLine.push({ month: aMonthNames[i - 1], measure: iMeasure, year: year });

    if (i === 12) {
      year++;
      i = 1;
    }
  }

  return aTimeLine;
};

export default parseTimeLine;
