import axios from 'axios';

const URLs = {
  BASEURL: `https://disease.sh/v3/covid-19/`,
  ContinentsSet: '/continents?yesterday=true&sort=todayCases',
  TopCountriesPerCasesSet: '/countries?sort=cases',
};

const Api = axios.create({
  baseURL: URLs.BASEURL,
});

const Request = {
  read: (sURL) => {
    return Api.get(URLs[sURL]);
  },
};

export default Request;
