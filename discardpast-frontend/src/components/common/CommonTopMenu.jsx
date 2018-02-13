import React from 'react';
import {Layout, Menu, Icon} from 'antd';
const MenuItemGroup = Menu.ItemGroup;
const { SubMenu } = Menu;

const {Header ,Content, Footer, Sider} = Layout;

const link = {
  index: "http://192.168.43.109:8000/#/",
  code: "http://192.168.43.109:8000/#/code",
  article: "http://192.168.43.109:8000/#/article",
  music: "http://192.168.43.109:8000/#/music",
  contact: "http://192.168.43.109:8000/#/contact"
};

class CommonTopMenu extends React.Component {

  render() {
    return (
      <div>
        <Layout>
          <Header style={{ position: 'fixed', width: '100%' }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><a href={link.index}>首页</a></Menu.Item>
              <Menu.Item key="2"><a href={link.code}>编程</a></Menu.Item>
              <Menu.Item key="3"><a href={link.article}>文章</a></Menu.Item>
              <Menu.Item key="4"><a href={link.music}>音乐</a></Menu.Item>
              <Menu.Item key="5"><a href={link.contact}>联系方式</a></Menu.Item>
            </Menu>
          </Header>
        </Layout>
      </div>
    )
  }
}

function useCommonTopMenu() {
  return (
    <CommonTopMenu/>
  )
}

export default useCommonTopMenu;
