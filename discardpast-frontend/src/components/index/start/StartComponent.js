import React from 'react';
import styles from './StartComponent.css';
import screenSize from '../IndexCommon';
import { Button } from 'antd';

let startStyle = {
    width: screenSize.screenWidit,
    height: screenSize.screenHeight,
    backgroundColor: '#789'
  };

const userInfo = {
  userName: '孤箫残月',
  userMotto: '心无所系自逍遥'
};

const art = 'http://192.168.43.109:8000/#/code';

class Start extends React.Component
{
  constructor(props){
    super(props);
    this.state = {nowStyle: startStyle}
  }
  componentDidMount() {
    window.addEventListener('resize',this.handleScreenSize);
  }
  componentWillUnmount() {
    window.addEventListener('resize',this.handleScreenSize);
  }

  handleScreenSize = () =>
  {
    const screenWidit = document.documentElement.clientWidth;
    const screenHeight= document.documentElement.clientHeight;

    let newStyle = {
      width: screenWidit,
      height:screenHeight,
      backgroundColor: '#789'
    };

    this.setState(
      {
        nowStyle: newStyle
      }
    )
  };
  render(){
    return (
      <div className={styles.flex_vertical}>
        <h1>
          {userInfo.userName}
        </h1>
        <h2>
          {userInfo.userMotto}
        </h2>
        <a href={art}>
          <Button type="primary" >进入我的世界...</Button>

        </a>

      </div>
    )
  }
}

function StartComponent() {
  return(
    <Start/>
  )
}

export default StartComponent;
