import axios from 'axios';

const Params = {
  yesterday: 'yesterday=true',
  lastDays: 'lastdays=all',
};

const URLs = {
  BASEURL: `https://disease.sh/v3/covid-19/`,
  ContinentsSet: '/continents?yesterday=true&sort=todayCases',
  CountriesSet: '/countries/',
  HistoricalSet: '/historical/',
  TopCountriesPerCasesSet: '/countries?yesterday=true&sort=cases',
};

const Api = axios.create({
  baseURL: URLs.BASEURL,
});

const Request = {
  read: (sURL) => {
    return Api.get(URLs[sURL]);
  },
  createKey: (sUrl, sKey, sParam) => {
    return sParam ? URLs[sUrl] + sKey + '?' + Params[sParam] : URLs[sUrl] + sKey;
  },
  readSingle: (sPath) => {
    return Api.get(sPath);
  },
};

export default Request;
