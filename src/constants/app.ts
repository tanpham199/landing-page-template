import appLogo from '@/assets/logo.png';
import { ThemeConfig } from 'antd';
import { Montserrat } from 'next/font/google';

export const APP_LOGO = appLogo;

export const FONT_FAMILY = Montserrat({ subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'] });

export const APP_THEME: ThemeConfig = {
  token: { fontFamily: FONT_FAMILY.style.fontFamily },
};

export const DAYJS_FORMAT = 'MMM D, YYYY';
