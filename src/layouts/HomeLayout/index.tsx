import { PropsWithChildren } from 'react';
import { Layout, FloatButton, theme } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { APP_LOGO } from '@/constants';
import styles from './HomeLayout.module.scss';
import { PagePath } from '@/enums';
import classNames from 'classnames';
import { useRouter } from 'next/router';

const { Header, Content, Footer } = Layout;

const NAV_ITEMS = [
  {
    label: 'Home',
    path: PagePath.Home,
  },
  {
    label: 'About',
    path: PagePath.About,
  },
];

const HomeLayout = ({ children }: PropsWithChildren) => {
  const {
    token: { colorTextLightSolid, colorPrimary },
  } = theme.useToken();

  const router = useRouter();

  return (
    <Layout className="min-h-screen">
      <Header className={styles.header}>
        <Link href={PagePath.Home} className={classNames(styles.logo, 'center')}>
          <Image src={APP_LOGO} alt="Logo" priority />
        </Link>
        <ul className={styles.menu}>
          {NAV_ITEMS.map(({ label, path }) => (
            <li key={label}>
              <Link
                href={path}
                style={{
                  color: colorTextLightSolid,
                  backgroundColor: router.pathname === path ? colorPrimary : undefined,
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </Header>
      <Content>{children}</Content>
      <Footer className="text-center">A2A SOFTWARE ©2023</Footer>
      <FloatButton.BackTop />
    </Layout>
  );
};

export default HomeLayout;
