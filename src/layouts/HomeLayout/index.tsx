import { PropsWithChildren } from 'react';
import { Breadcrumb, Layout, Menu, FloatButton } from 'antd';
import Image from 'next/image';
import { APP_LOGO } from '@/constants';
import styles from './HomeLayout.module.scss';
import Link from 'next/link';
import { PagePath } from '@/enums';
import classNames from 'classnames';

const { Header, Content, Footer } = Layout;

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <Layout className="min-h-screen">
      <Header className="flex justify-between px-12 sticky top-0">
        <Link href={PagePath.Home} className={classNames(styles.logo, 'center')}>
          <Image src={APP_LOGO} alt="Logo" priority />
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(5).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
      <Content className="px-12">
        <Breadcrumb className="my-4" items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]} />
        {children}
      </Content>
      <Footer className="text-center">Ant Design ©2023 Created by Ant UED</Footer>
      <FloatButton.BackTop />
    </Layout>
  );
};

export default HomeLayout;
