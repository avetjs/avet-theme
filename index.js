import React from 'react';
import Cookies from 'js-cookie';
import config from 'avet/config';

let stylesCache;

const themeConfig = config.theme;
const chooseTheme = theme => {
  Cookies.set(themeConfig.cookieKey, theme);
  window.location.reload();
};

const currentTheme = () => {
  return Cookies.get(themeConfig.cookieKey) || 'default';
};

const getThemeStyles = () => {
  const curTheme = currentTheme();
  const commonStyles = themeConfig.styles.common || {};
  const themeStyles = themeConfig.styles[curTheme] || {};
  return Object.assign({}, commonStyles, themeStyles);
};

export default {
  get styles() {
    if (!stylesCache) {
      stylesCache = getThemeStyles();
    }
    return stylesCache;
  },
  chooseTheme,
  currentTheme,
};
