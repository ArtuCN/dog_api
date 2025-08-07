// pages/_app.tsx
import 'antd/dist/reset.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Layout } from 'antd';
import Link from 'next/link';
import { Menu,  Card, Button} from 'antd'
const { Header, Content, Footer, Sider } = Layout;


const routeTitles: { [key: string]: string } = {
  '/': 'Home',
  '/breeds': 'Breeds',
  '/groups': 'Groups',
  '/settings': 'Settings',
  '/facts': 'Facts',
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = router.pathname;
  const pageTitle = routeTitles[currentPath] || 'Dog Dashboard';
  return (
    <Layout style={{ minHeight: '100vh' }}>
      
      {/* Sidebar */}
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['home']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="home">
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="breeds">
            <Link href="/breeds">Breeds</Link>
          </Menu.Item>
          <Menu.Item key="groups">
            <Link href="/groups">Groups</Link>
          </Menu.Item>
          <Menu.Item key="facts">
            <Link href="/facts">Facts</Link>
          </Menu.Item>
          <Menu.Item key="settings">
            <Link href="/settings">Settings</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#f0f2f5', padding: '0 20px' }}>
          <h1 style={{ margin: 0 }}>{pageTitle}</h1>
        </Header>

        <Content style={{ margin: '24px 16px 0', padding: 24, background: '#fff' }}>
          <Component {...pageProps} />
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Made by Broski (ArtuIlMaginfico)
        </Footer>
      </Layout>
    </Layout>
  );
}
