import appLogo from '@/assets/logo.svg';
import { ThemeConfig } from 'antd';
import { Montserrat } from 'next/font/google';

export const APP_URL = 'https://www.a2asoftware.com';

export const APP_LOGO = appLogo;

export const FONT_FAMILY = Montserrat({ subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'] });

export const APP_THEME: ThemeConfig = {
  token: { fontFamily: FONT_FAMILY.style.fontFamily },
};

export const DEFAULT_META_DATA = {
  metaDescription: 'My amazing template',
  metaKeywords: 'template,nextjs,react',
  metaImage: APP_URL + appLogo.src,
  metaUrl: APP_URL,
};

export const DAYJS_FORMAT = 'MMM D, YYYY';
