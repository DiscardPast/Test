import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import { Input } from 'antd';
const Search = Input.Search;
const MenuItemGroup = Menu.ItemGroup;
const { SubMenu } = Menu;

const {Sider,Header} = Layout;

class CommonSideMenu extends React.Component {

  render() {
    return (
      <div>
        <Layout style={{ padding: '0 50px', marginTop: 64 }}>
          <Sider
            style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0,backgroundColor:'#FFF' }}>
            <Menu
              onClick={this.handleClick}
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu key="sub0" title={<span><Icon type="mail" /><span>Java后端</span></span>}>
                <MenuItemGroup key="g1" title="Java基础">
                  <Menu.Item key="1">Java基础详解(一)</Menu.Item>
                  <Menu.Item key="2">Java基础详解(二)</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Java后端</span></span>}>
                <MenuItemGroup key="g1" title="Java基础">
                  <Menu.Item key="1">Java基础详解(一)</Menu.Item>
                  <Menu.Item key="2">Java基础详解(二)</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Java后端</span></span>}>
                <MenuItemGroup key="g1" title="Java基础">
                  <Menu.Item key="1">Java基础详解(一)</Menu.Item>
                  <Menu.Item key="2">Java基础详解(二)</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Web前端</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
        </Layout>
      </div>
    )
  }
}

function useCommonSideMenu() {
  return (
    <CommonSideMenu/>
  )
}

export default useCommonSideMenu;
