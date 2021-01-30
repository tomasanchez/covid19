/* eslint-disable no-loop-func */
const aMonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const isInCurrentMoth = (sDate, iMonth, iYear) => {
  return getMonth(sDate) === iMonth && sDate.endsWith(iYear.toString());
};

const getMonth = (sDate) => {
  return parseInt(sDate.substr(sDate, sDate.indexOf('/')), 10);
};

/**
 * Timeline generator
 * @private
 * @function
 * @param {array} aDates the array with all dates
 * @param {object} oMeasure the object from where to obtain the date data
 * @param {int} lastMonth the last month number
 * @return {array} a Timeline array
 */
const createTimeline = (aDates, oMeasure, lastMonth) => {
  var aTimeLine = [],
    iThisYear = new Date().getFullYear() % 100;

  for (var month = 1, year = 20; year <= iThisYear; month++) {
    // Cut loop when passed the last month
    if (month === lastMonth + 1 && year === iThisYear) break;

    // Getting all dates from the current Month
    var aDays = aDates.filter((sDate) => {
      return isInCurrentMoth(sDate, month, year);
    });

    // getting the date measures
    var aMeasures = aDays.map((sDay) => oMeasure[sDay]);

    // total measures from the month
    var iMeasure = aMeasures.reduce((totalMeasures, measures) => {
      return totalMeasures + measures;
    }, 0);

    // adding to timeline
    aTimeLine.push({ month: aMonthNames[month - 1], measure: iMeasure, year: year });

    // updating year
    if (month === 12) {
      year++;
      month = 0;
    }
  }

  return aTimeLine;
};

const createHistoricalData = async (oHistorical) => {
  var oHistoricalData = {};

  var aMeasures = ['cases', 'deaths', 'recovered'];

  aMeasures.forEach((sMeasure) => {
    var aDates = Object.getOwnPropertyNames(oHistorical.timeline[sMeasure]),
      iLastMonth = getMonth(aDates[aDates.length - 1]);

    var aTimeLine = createTimeline(aDates, oHistorical.timeline[sMeasure], iLastMonth);
  });

  return oHistoricalData;
};

export default createHistoricalData;
