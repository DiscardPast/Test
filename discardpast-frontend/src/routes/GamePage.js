import React from 'react';
import { connect } from 'dva';
import styles from './GamePage.css';
import CommonTopMenu from '../components/common/CommonTopMenu';

function GamePage() {
  return (
    <div>
      <CommonTopMenu/>
    </div>
  );
}
GamePage.propTypes = {
};

export default connect()(GamePage);
