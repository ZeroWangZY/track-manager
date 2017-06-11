import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Map from './component/Map';
import MapController from'./redux/controller/MapController';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {


    state = {
        collapsed: false,
        mode: 'inline',
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    }
  render() {
    return (
        <Layout>
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                <div className="logo" />
                <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
              <span>
                <Icon type="file" />
                <span className="nav-text">首页</span>
              </span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="user" /><span className="nav-text">User</span></span>}
                    >
                        <Menu.Item key="2">Tom</Menu.Item>
                        <Menu.Item key="3">Bill</Menu.Item>
                        <Menu.Item key="4">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="team" /><span className="nav-text">Team</span></span>}
                    >
                        <Menu.Item key="5">Team 1</Menu.Item>
                        <Menu.Item key="6">Team 2</Menu.Item>
                    </SubMenu>

                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '12px 0' }}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <MapController />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Zero Wang\Dawn Shen\Feng Huihuang
                </Footer>
            </Layout>
        </Layout>
    );
  }
}


export default App;
