import { getUrl as getUrlProvider } from '../URLProvider';

const URLs = {
  HOME: '/covid19/',
  OVERVIEW: '/covid19/overview',
  DETAILS: '/covid19/overview/details/:id',
  TODO_DETAIL: '/todo/detail/:id',
  TODO_EDIT: '/todo/edit/:id',
  TODO_LIST: '/todo/all',
  NOT_FOUND: '/notFound',
  BUGGY: '/buggy',
  ANY: '/*',
  LANGUAGE: '?sap-ui-language=:id',
};

export const getUrl = (key, replaceOptions) => {
  return getUrlProvider(URLs, key, replaceOptions);
};
