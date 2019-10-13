
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import './index.css';
import { Anchor, Layout, Menu, Icon, Typography } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Link } = Anchor;
const { Title, Text } = Typography;

const handleClick = (e, link) => {
  e.preventDefault();
  console.log(link);
};

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <SubMenu
              key="user"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
            <Menu.Item key="homepage">Home Page</Menu.Item>
            <Menu.Item key="login">Login Page</Menu.Item>
            <Menu.Item key="signup">Signup Page</Menu.Item>

            </SubMenu>

            <SubMenu
              key="category"
              title={
                <span>
                  <Icon type="desktop" />
                  <span>Category</span>
                </span>
              }
            >
            <Menu.Item key="trees">View Trees</Menu.Item>
            <Menu.Item key="products">Relates Products</Menu.Item>

            </SubMenu>
            <Menu.Item key="upload">
              <Icon type="upload" />
              <span>Uploading</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <Title mark>Welcome to Ant Forest!</Title>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

if (process.env.NODE_ENV === 'development') {
  serviceWorker.unregister()
} else {
 serviceWorker.register()
}
