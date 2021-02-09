import { getUrl as getUrlProvider } from '../URLProvider';

const URLs = {
  BASEURL: '/covid19',
  HOME: '/',
  OVERVIEW: '/overview',
  DETAILS: '/overview/details/:id',
  NOT_FOUND: '/notFound',
  BUGGY: '/buggy',
  ANY: '/*',
  LANGUAGE: '?sap-ui-language=:id',
};

export const getUrl = (key, replaceOptions) => {
  return getUrlProvider(URLs, key, replaceOptions);
};
