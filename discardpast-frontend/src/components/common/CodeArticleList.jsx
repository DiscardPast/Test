import React from 'react';
import { List, Avatar, Icon } from 'antd';

const listData = [];

for (let i = 0; i < 50; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `Java集合框架 ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Java是面向对象编程语言，经常操作很多对象，必要时需存储对象（达到复用或管理等目的）',
    content: 'Java是面向对象编程语言，经常操作很多对象，必要时需存储对象（达到复用或管理等目的），常见容器如数组和StringBuffer（或StringBuilder，前者线程安全，效率较低，为了提高效率而引进)。\n' +
    '\n' +
    '通常数组的长度固定，所以不适合做变化的需求（可以手动去重新分配调整，较麻烦），而StringBuffer(或StringBuilder)存储元素为字符串，皆不符合存储任意元素的要求。因此集合就应运而生了。',
  });
}

const pagination = {
  defaultPageSize: listData.length/3,
  defaultCurrent: 1,
  pageSizeOptions:5,
  showQuickJumper:true,
  total: listData.length,
  onChange: (() => {}),
};

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class CodeArticleList extends React.Component {

  render() {
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={pagination}
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[<IconText type="like-o" text="156" />, <IconText type="dislike-o" text="156" />, <IconText type="message" text="2" />]}
            extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    )
  }
}

function useCodeArticleList() {
  return (
    <CodeArticleList/>
  )
}

export default CodeArticleList;
