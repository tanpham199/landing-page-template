import { APP_THEME } from '@/constants';
import HomeLayout from '@/layouts/HomeLayout';
import '@/styles/globals.scss';
import { ConfigProvider, App as AntApp } from 'antd';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ConfigProvider theme={APP_THEME}>
      <AntApp>
        <HomeLayout>
          <Component {...pageProps} />
        </HomeLayout>
      </AntApp>
    </ConfigProvider>
  );
};

export default App;
