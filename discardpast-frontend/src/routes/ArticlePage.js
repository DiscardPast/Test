import React from 'react';
import { connect } from 'dva';
import styles from './ArticlePage.css';
import CommonSideMenu from '../components/common/CommonSideMenu';
import CommonTopMenu from '../components/common/CommonTopMenu';
import CommonContentMenu from '../components/common/CommonContentMenu';

function ArticlePage() {
  return (
    <div>
      <CommonTopMenu/>
      <CommonSideMenu/>
      <CommonContentMenu/>

    </div>
  );
}
ArticlePage.propTypes = {
};

export default connect()(ArticlePage);
