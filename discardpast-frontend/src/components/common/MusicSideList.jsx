import React from 'react';
import { List, message, Avatar, Spin } from 'antd';
import {Layout} from 'antd';
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';
import styles from './MusicSideList.css';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
const {Sider} = Layout;

class MusicSideList extends React.Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
  }
  getData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (res) => {
        callback(res);
      },
    });
  }
  componentWillMount() {
    this.getData((res) => {
      this.setState({
        data: res.results,
      });
    });
  }
  handleInfiniteOnLoad = () => {
    let data = this.state.data;
    this.setState({
      loading: true,
    });
    if (data.length > 14) {
      message.warning('音乐列表加载完毕');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.getData((res) => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      });
    });
  }

  render() {
    return (
      <div>
        <Layout style={{ padding: '0 50px', marginTop: 64 }}>
          <Sider
            style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0,backgroundColor:'#FFF' }}>
            <div className={styles["demo-infinite-container"]}>
              <InfiniteScroll
                initialLoad={true}
                pageStart={0}
                loadMore={this.handleInfiniteOnLoad}
                hasMore={!this.state.loading && this.state.hasMore}
                useWindow={false}
              >
                <List
                  dataSource={this.state.data}
                  renderItem={item => (
                    <List.Item key={item.id}>
                      <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://ant.design">{item.name.last}</a>}
                        description={item.email}
                      />
                      <div>Content</div>
                    </List.Item>
                  )}
                >
                  {this.state.loading && this.state.hasMore && <Spin className={styles["demo-loading"]} />}
                </List>
              </InfiniteScroll>
            </div>
          </Sider>
        </Layout>
      </div>
    )
  }
}

function useMusicSideList() {
  return (
    <MusicSideList/>
  )
}

export default MusicSideList;
