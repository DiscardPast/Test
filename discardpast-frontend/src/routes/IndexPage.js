import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import StartComponent from '../components/index/start/StartComponent';

  function IndexPage() {
    return (
      <div className={styles.normal}>
        <StartComponent/>
      </div>
    );
  }
IndexPage.propTypes = {
};

export default connect()(IndexPage);
