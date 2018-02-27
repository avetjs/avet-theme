import React from 'react';
import Cookies from 'js-cookie';
import config from 'avet/config';

const themeConfig = config.theme;
const chooseTheme = theme => {
  Cookies.set(themeConfig.cookieKey, theme);
  window.location.reload();
};

const currentTheme = ctx => {
  const theme = ctx
    ? ctx.cookies.get(themeConfig.cookieKey, { signed: false })
    : Cookies.get(themeConfig.cookieKey);
  return theme || 'default';
};

const getStyles = ctx => {
  const curTheme = currentTheme(ctx);
  const commonStyles = themeConfig.styles.common || {};
  const themeStyles = themeConfig.styles[curTheme] || {};
  return Object.assign({}, commonStyles, themeStyles);
};

export default {
  getStyles,
  chooseTheme,
  currentTheme,
};
