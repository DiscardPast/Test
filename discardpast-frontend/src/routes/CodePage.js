import React from 'react';
import { connect } from 'dva';
import styles from './CodePage.css';
import CommonSideMenu from '../components/common/CommonSideMenu';
import CommonTopMenu from '../components/common/CommonTopMenu';
import CommonContentMenu from '../components/common/CommonContentMenu';

function CodePage() {
  return (
    <div>
      <CommonTopMenu/>
      <CommonSideMenu/>
      <CommonContentMenu/>
    </div>
  );
}
CodePage.propTypes = {
};

export default connect()(CodePage);
