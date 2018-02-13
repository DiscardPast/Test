import React from 'react';
import {Layout} from 'antd';
import CodeArticleList from './CodeArticleList';
import { List, Avatar, Icon } from 'antd';

const listData = [];

for (let i = 0; i < 50; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const pagination = {
  pageSize: 10,
  current: 10,
  total: listData.length,
  onChange: (() => {}),
};

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const {Content, Footer} = Layout;

class CommonContentMenu extends React.Component {

  render() {
    return (
      <div>
        <Layout style={{ padding: '0 50px'}}>
          <Layout style={{ marginLeft: 200 }}>
            <Content
              style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 200,backgroundColor:'#FFF',paddingBottom:48}}>
              <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                <CodeArticleList/>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

function useCommonContentMenu() {
  return (
    <CommonContentMenu/>
  )
}

export default useCommonContentMenu;
