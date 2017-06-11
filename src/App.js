import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import MapController from'./redux/controller/MapController';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
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
        <Router>
        <Layout>
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                <div className="logo" />
                <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['1']}>

                    <Menu.Item key="1">
                        <Link to="/">
                     <span>

                         <Icon type="file" />
                         <span className="nav-text">首页</span>

                    </span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="2">
                        <Link to="/user">
                        <Icon type="user" />
                        <span className="nav-text">用户</span>
                        </Link>
                    </Menu.Item>
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
                        <Route exact path="/" component={MapController}/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Zero Wang\Dawn Shen\Feng Huihuang
                </Footer>
            </Layout>
        </Layout>
        </Router>
    );
  }
}


export default App;
